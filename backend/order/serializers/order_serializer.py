from rest_framework import serializers
from ..models import Order
from orderItem.serializers import OrderItemSerializer
from orderItem.models import OrderItem

class OrderSerializer(serializers.ModelSerializer):
  customer_email = serializers.EmailField(source='customer.email', read_only=True)
  items = OrderItemSerializer(many=True)
  total_price = serializers.SerializerMethodField()

  class Meta:
    model = Order
    fields = ['id', 'customer', 'customer_email', 'total_price', 'status', 'created_at', 'updated_at', 'items']
    read_only_fields = ['customer']

  def get_total_price(self, obj):
    return obj.total_price

  def create(self, validated_data):
          items_data = validated_data.pop('items')
          order = Order.objects.create(**validated_data)

          for item in items_data:
              OrderItem.objects.create(
                  order=order,
                  product=item['product'],
                  quantity=item['quantity']
              )

          return order
