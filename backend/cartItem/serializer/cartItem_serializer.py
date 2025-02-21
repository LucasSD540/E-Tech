from rest_framework import serializers
from ..models import CartItem
from product.models import Product

class CartItemSerializer(serializers.ModelSerializer):
  product = serializers.PrimaryKeyRelatedField(queryset=Product.objects.all())
  total_price = serializers.SerializerMethodField()
  
  class Meta:
    model = CartItem
    fields = ['id', 'cart', 'product', 'quantity', 'total_price', 'created_at', 'updated_at']

  def get_total_price(self, obj):
    return obj.total_price
