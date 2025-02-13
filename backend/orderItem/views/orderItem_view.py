from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from ..serializers import OrderItemSerializer
from ..models import OrderItemModel

class OrderItemCreateView(generics.ListCreateAPIView):
  queryset = OrderItemModel.objects.all()
  serializer_class = OrderItemSerializer
  permission_classes = [AllowAny]

class OrderItemListView(generics.ListAPIView):
  queryset = OrderItemModel.objects.all()
  serializer_class = OrderItemSerializer
  permission_classes = [IsAuthenticated]

class OrderItemDetailView(generics.RetrieveAPIView):
  queryset = OrderItemModel.objects.all()
  serializer_class = OrderItemSerializer
  permission_classes = [IsAuthenticated]

class OrderItemUpdateView(generics.UpdateAPIView):
  queryset = OrderItemModel.objects.all()
  serializer_class = OrderItemSerializer
  permission_classes = [IsAuthenticated]

class OrderItemDeleteView(generics.DestroyAPIView):
  queryset = OrderItemModel.objects.all()
  serializer_class = OrderItemSerializer
  permission_classes = [IsAuthenticated]
