from rest_framework import serializers
from ..models import Cart
from cartItem.serializer import CartItemSerializer

class CartSerializer(serializers.ModelSerializer):
  items = CartItemSerializer(many=True, read_only=True)
  total_price = serializers.SerializerMethodField()

  class Meta:
    model = Cart
    fields = ['id', 'user', 'total_price', 'created_at', 'updated_at', 'items']

  def get_total_price(self, obj):
    return obj.total_price
