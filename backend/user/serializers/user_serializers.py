from rest_framework import serializers
from ..models import Account

class UserSerializer(serializers.ModelSerializer):
  password = serializers.CharField(write_only=True)

  class Meta:
    model = Account
    fields = ['id', 'email', 'first_name', 'last_name', 'password']

  def create(self, validated_data):
    user = Account(**validated_data)
    user.set_password(validated_data['password'])
    user.save()
    return user
