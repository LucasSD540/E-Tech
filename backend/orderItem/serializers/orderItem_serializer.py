from rest_framework import serializers
from ..models import OrderItemModel

class OrderItemSerializer(serializers.ModelSerializer):
  class Meta:
    model = OrderItemModel
    fields = ['order', 'product', 'quantity', 'price', 'total_price', 'discount', 'created_at', 'updated_at']
