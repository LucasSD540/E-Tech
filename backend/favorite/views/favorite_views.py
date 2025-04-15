from rest_framework import generics
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from ..serializers import FavoriteSerializer
from ..models import Favorite

class FavoriteCreateView(generics.CreateAPIView):
  queryset = Favorite.objects.all()
  serializer_class = FavoriteSerializer
  permission_classes = [IsAuthenticated]

  def perform_create(self, serializer):
    serializer.save(customer=self.request.user)

class FavoriteListView(generics.ListAPIView):
  queryset = Favorite.objects.all()
  serializer_class = FavoriteSerializer
  permission_classes = [IsAuthenticated]

  def get_queryset(self):
    return Favorite.objects.filter(customer=self.request.user)

class FavoriteRemoveView(APIView):
  permission_classes = [IsAuthenticated]

  def delete(self, request, product_id):
    favorite = Favorite.objects.filter(
      customer=request.user,
      product_id=product_id
    ).first()

    if favorite:
      favorite.delete()
      return Response({"detail": "The product was removed from favorites succesfully"}, status=status.HTTP_204_NO_CONTENT)
    else:
      return Response({"detail": "The product was not found"}, status=status.HTTP_404_NOT_FOUND)
