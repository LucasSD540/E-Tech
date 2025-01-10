from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from ..serializers import OrderSerializer
from ..models import Order

class OrderCreateView(generics.ListCreateAPIView):
  queryset = Order.objects.all()
  serializer_class = OrderSerializer
  permission_classes = [AllowAny]

class OrderListView(generics.ListAPIView):
  queryset = Order.objects.all()
  serializer_class = OrderSerializer
  permission_classes = [IsAuthenticated]

class OrderDetailView(generics.RetrieveAPIView):
  queryset = Order.objects.all()
  serializer_class = OrderSerializer
  permission_classes = [IsAuthenticated]

class OrderUpdateView(generics.UpdateAPIView):
  queryset = Order.objects.all()
  serializer_class = OrderSerializer
  permission_classes = [IsAuthenticated]

class OrderDeleteView(generics.DestroyAPIView):
  queryset = Order.objects.all()
  serializer_class = OrderSerializer
  permission_classes = [IsAuthenticated]
