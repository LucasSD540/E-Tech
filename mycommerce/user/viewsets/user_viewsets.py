from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from ..serializers import UserSerializer
from ..models import Account

class UserCreateView(generics.ListCreateAPIView):
  queryset = Account.objects.all()
  serializer_class = UserSerializer
  permission_classes = [AllowAny]


class UserListView(generics.ListAPIView):
  queryset = Account.objects.all()
  serializer_class = UserSerializer
  permission_classes = [IsAuthenticated]

class UserUpdateView(generics.UpdateAPIView):
  queryset = Account.objects.all()
  serializer_class = UserSerializer
  permission_classes = [IsAuthenticated]

class UserDeleteView(generics.DestroyAPIView):
  queryset = Account.objects.all()
  serializer_class = UserSerializer
  permission_classes = [IsAuthenticated]
  