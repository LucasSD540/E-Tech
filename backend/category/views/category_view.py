from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from ..models import Category
from ..serializers import CategorySerializer

class CategoryCreateView(generics.CreateAPIView):
  queryset = Category.objects.all()
  serializer_class = CategorySerializer
  permission_classes = [IsAuthenticated]

class CategoryListView(generics.ListAPIView):
  queryset = Category.objects.all()
  serializer_class = CategorySerializer
  permission_classes = [AllowAny]

class CategoryUpdateView(generics.UpdateAPIView):
  queryset = Category.objects.all()
  serializer_class = CategorySerializer
  permission_classes = [IsAuthenticated]

class CategoryDeleteView(generics.DestroyAPIView):
  queryset = Category.objects.all()
  serializer_class = CategorySerializer
  permission_classes = [IsAuthenticated]
