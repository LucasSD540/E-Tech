from rest_framework import serializers
from ..models import Product

class ProductSerializer(serializers.ModelSerializer):
  class Meta:
    model = Product
    fields = ['id', 'productName', 'weight', 'description', 'old_price', 'price', 'stock', 'image_url', 'category', 'created_at', 'updated_at']
  