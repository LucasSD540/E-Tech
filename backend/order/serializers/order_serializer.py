from rest_framework import serializers
from ..models import Order
from orderItem.serializers import OrderItemSerializer

class OrderSerializer(serializers.ModelSerializer):
  customer_email = serializers.EmailField(source='customer.email', read_only=True)
  items = OrderItemSerializer(many=True, read_only=True)
  total_price = serializers.SerializerMethodField()

  class Meta:
    model = Order
    fields = ['id', 'customer', 'customer_email', 'total_price', 'status', 'created_at', 'updated_at', 'items']

  def get_total_price(self, obj):
    return obj.total_price
