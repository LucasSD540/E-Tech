from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from ..serializers import UserSerializer
from ..models import Account

class UserCreateView(generics.CreateAPIView):
  queryset = Account.objects.all()
  serializer_class = UserSerializer
  permission_classes = [AllowAny]


class UserListView(generics.ListAPIView):
  queryset = Account.objects.all()
  serializer_class = UserSerializer
  permission_classes = [IsAuthenticated]

class UserDetailView(APIView):
  permission_classes = [IsAuthenticated]

  def get(self, request):
    user = request.user
    serializer = UserSerializer(user)
    return Response(serializer.data)

class UserUpdateView(generics.UpdateAPIView):
  queryset = Account.objects.all()
  serializer_class = UserSerializer
  permission_classes = [IsAuthenticated]

class UserDeleteView(generics.DestroyAPIView):
  queryset = Account.objects.all()
  serializer_class = UserSerializer
  permission_classes = [IsAuthenticated]
  