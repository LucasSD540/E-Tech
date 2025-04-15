from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from ..serializers import OrderSerializer
from ..models import Order

class OrderCreateView(generics.CreateAPIView):
  queryset = Order.objects.all()
  serializer_class = OrderSerializer
  permission_classes = [IsAuthenticated]

  def perform_create(self, serializer):
    serializer.save(customer=self.request.user)

class OrderListView(generics.ListAPIView):
  queryset = Order.objects.all()
  serializer_class = OrderSerializer
  permission_classes = [IsAuthenticated]

  def get_queryset(self):
    return Order.objects.filter(customer=self.request.user)

class OrderDetailView(generics.RetrieveAPIView):
  queryset = Order.objects.all()
  serializer_class = OrderSerializer
  permission_classes = [IsAuthenticated]

class OrderUpdateView(generics.UpdateAPIView):
  queryset = Order.objects.all()
  serializer_class = OrderSerializer
  permission_classes = [IsAuthenticated]

  def perform_update(self, serializer):
    instance = serializer.save()
    instance.total_price = (instance.price - instance.discount) * instance.quantity
    instance.save()

class OrderDeleteView(generics.DestroyAPIView):
  queryset = Order.objects.all()
  serializer_class = OrderSerializer
  permission_classes = [IsAuthenticated]
