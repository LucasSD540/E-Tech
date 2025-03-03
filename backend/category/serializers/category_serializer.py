from rest_framework import serializers
from ..models import Category
from product.models import Product

class CategorySerializer(serializers.ModelSerializer):
  category_products = serializers.PrimaryKeyRelatedField(
        queryset=Product.objects.all(), many=True, write_only=True, required=False
    )
  products = serializers.SerializerMethodField()

  class Meta:
    model = Category
    fields = ['id', 'categoryName', 'category_products', 'products']

  def get_products(self, obj):
    return [
      {
        "id": product.id,
        "productName": product.productName,
        "description": product.description,
        "price": product.price,
        "stock": product.stock,
        "image_url": product.image_url,
      }
      for product in obj.product_category.all()
    ]

  def create(self, validated_data):
    category_products = validated_data.pop('category_products', [])

    category = Category.objects.create(**validated_data)

    category.product_category.set(category_products)

    return category
