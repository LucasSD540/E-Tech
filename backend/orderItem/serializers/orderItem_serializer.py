from rest_framework import serializers
from ..models import OrderItemModel
from product.models import Product

class OrderItemSerializer(serializers.ModelSerializer):
  product = serializers.PrimaryKeyRelatedField(queryset=Product.objects.all())
  total_price = serializers.SerializerMethodField()
  class Meta:
    model = OrderItemModel
    fields = ['order', 'product', 'quantity', 'total_price', 'created_at', 'updated_at']

  def get_total_price(self, obj):
    return obj.total_price
