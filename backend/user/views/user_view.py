from rest_framework import generics
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from ..serializers import UserSerializer
from ..models import Account
from rest_framework import status

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
  permission_classes = [IsAuthenticated]

  def patch(self, request):
    user = request.user
    serializer = UserSerializer(user, data=request.data, partial=True)

    if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
    else:
       return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserDeleteView(APIView):
    permission_classes = [IsAuthenticated]

    def delete(self, request):
        user = request.user

        refresh_token = request.COOKIES.get("refresh_token")
        if refresh_token:
            try:
                refresh = RefreshToken(refresh_token)
                refresh.blacklist()
            except Exception:
                pass

        user.delete()

        response = Response({"detail": "Conta excluída com sucesso."}, status=status.HTTP_204_NO_CONTENT)
        response.delete_cookie("access_token", path="/")
        response.delete_cookie("refresh_token", path="/")

        response.set_cookie("access_token", "", httponly=True, secure=True, samesite="None", path="/")
        response.set_cookie("refresh_token", "", httponly=True, secure=True, samesite="None", path="/")

        return response
