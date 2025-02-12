from rest_framework import serializers
from ..models import Account
from favorite.models import Favorite

class UserSerializer(serializers.ModelSerializer):
  password = serializers.CharField(write_only=True)
  favorite_products = serializers.SerializerMethodField()

  class Meta:
    model = Account
    fields = ['id', 'email', 'first_name', 'last_name', 'password', 'favorite_products']

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
