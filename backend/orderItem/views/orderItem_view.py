from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from ..serializers import OrderItemSerializer
from ..models import OrderItem

class OrderItemCreateView(generics.CreateAPIView):
  queryset = OrderItem.objects.all()
  serializer_class = OrderItemSerializer
  permission_classes = [AllowAny]

class OrderItemListView(generics.ListAPIView):
  queryset = OrderItem.objects.all()
  serializer_class = OrderItemSerializer
  permission_classes = [IsAuthenticated]

class OrderItemDetailView(generics.RetrieveAPIView):
  queryset = OrderItem.objects.all()
  serializer_class = OrderItemSerializer
  permission_classes = [IsAuthenticated]

class OrderItemUpdateView(generics.UpdateAPIView):
  queryset = OrderItem.objects.all()
  serializer_class = OrderItemSerializer
  permission_classes = [IsAuthenticated]

class OrderItemDeleteView(generics.DestroyAPIView):
  queryset = OrderItem.objects.all()
  serializer_class = OrderItemSerializer
  permission_classes = [IsAuthenticated]
