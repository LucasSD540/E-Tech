from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from ..models import CartItem
from ..serializer import CartItemSerializer

class CartItemCreateView(generics.CreateAPIView):
  queryset = CartItem.objects.all()
  serializer_class = CartItemSerializer
  permission_classes = [IsAuthenticated]

class CartItemListView(generics.ListAPIView):
  queryset = CartItem.objects.all()
  serializer_class = CartItemSerializer
  permission_classes = [IsAuthenticated]

class CartItemDetailView(generics.RetrieveAPIView):
  queryset = CartItem.objects.all()
  serializer_class = CartItemSerializer
  permission_classes = [IsAuthenticated]

class CartItemUpdateView(generics.UpdateAPIView):
  queryset = CartItem.objects.all()
  serializer_class = CartItemSerializer
  permission_classes = [IsAuthenticated]

class CartItemDeleteView(generics.DestroyAPIView):
  queryset = CartItem.objects.all()
  serializer_class = CartItemSerializer
  permission_classes = [IsAuthenticated]
