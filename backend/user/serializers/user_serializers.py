from rest_framework import serializers
from ..models import Account
from favorite.models import Favorite
from validate_docbr import CPF

class UserSerializer(serializers.ModelSerializer):
  password = serializers.CharField(write_only=True)
  favorite_products = serializers.SerializerMethodField()

  class Meta:
    model = Account
    fields = ['id', 'email', 'cpf', 'first_name', 'last_name', 'password', 'favorite_products']

  def validate(self, attrs):
        cpf_value = attrs.get('cpf')

        if self.instance is None and not cpf_value:
            raise serializers.ValidationError({"cpf": "O CPF é obrigatório."})
        
        if cpf_value:
            cpf = CPF()
            if not cpf.validate(cpf_value):
                raise serializers.ValidationError({"cpf": "CPF inválido."})

        return attrs


  def create(self, validated_data):
    user = Account(**validated_data)
    user.set_password(validated_data['password'])
    user.save()
    return user

  def get_favorite_products(self, obj):
    favorites = Favorite.objects.filter(customer=obj)
    return [
      {
        "id": fav.product.id,
        "name": fav.product.name,
        "price": fav.product.price,
        "image_url": fav.product.image_url,
        "category": fav.product.category,
      }
      for fav in favorites
    ]
