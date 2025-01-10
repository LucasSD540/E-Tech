from rest_framework import serializers
from ..models import Order

class OrderSerializer(serializers.ModelSerializer):
  customer_email = serializers.EmailField(source='customer.email', read_only=True)

  class Meta:
    model = Order
    fields = ['id', 'customer', 'customer_email', 'total_price', 'status', 'created_at', 'updated_at']
