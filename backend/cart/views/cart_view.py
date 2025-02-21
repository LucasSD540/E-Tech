from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from ..models import Cart
from ..serializers import CartSerializer

class CartCreateView(generics.CreateAPIView):
  queryset = Cart.objects.all()
  serializer_class = CartSerializer
  permission_classes = [IsAuthenticated]

class CartListView(generics.ListAPIView):
  queryset = Cart.objects.all()
  serializer_class = CartSerializer
  permission_classes = [IsAuthenticated]

class CartDetailView(generics.RetrieveAPIView):
  queryset = Cart.objects.all()
  serializer_class = CartSerializer
  permission_classes = [IsAuthenticated]

class CartUpdateView(generics.UpdateAPIView):
  queryset = Cart.objects.all()
  serializer_class = CartSerializer
  permission_classes = [IsAuthenticated]

class CartDeleteView(generics.DestroyAPIView):
  queryset = Cart.objects.all()
  serializer_class = CartSerializer
  permission_classes = [IsAuthenticated]
