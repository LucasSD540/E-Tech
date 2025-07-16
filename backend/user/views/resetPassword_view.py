from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.tokens import default_token_generator
from django.core.mail import send_mail
from django.contrib.auth import get_user_model
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes, force_str
from decouple import config
from rest_framework_simplejwt.tokens import RefreshToken

User = get_user_model()

class PasswordResetRequestView(APIView):
    def post(self, request, *args, **kwargs):
        email = request.data.get('email')
        try:
            user = User.objects.get(email=email)
            token = default_token_generator.make_token(user)
            uid = urlsafe_base64_encode(force_bytes(user.pk))
            reset_link = f"https://my-commerce-green.vercel.app/reset-password/{uid}/{token}/"

            send_mail(
                'Redefinição de senha',
                f'Clique no link para redefinir sua senha: {reset_link}',
                config("EMAIL_HOST_USER"),
                [email],
                fail_silently=False,
            )
            return Response({"message": "E-mail de redefinição enviado!"}, status=status.HTTP_200_OK)

        except User.DoesNotExist:
            return Response({"error": "E-mail não encontrado."}, status=status.HTTP_404_NOT_FOUND)


class PasswordResetConfirmView(APIView):
    def post(self, request, uidb64, token, *args, **kwargs):
        try:
            uid = force_str(urlsafe_base64_decode(uidb64))
            user = User.objects.get(pk=uid)
            new_password = request.data.get('new_password')

            if default_token_generator.check_token(user, token):
                user.set_password(new_password)
                user.save()
                return Response({"message": "Senha redefinida com sucesso!"}, status=status.HTTP_200_OK)
            elif not new_password:
                return Response({"message": "Nova senha não fornecida."}, status=status.HTTP_400_BAD_REQUEST)
            else:
                return Response({"error": "Token inválido ou expirado."}, status=status.HTTP_400_BAD_REQUEST)
        except User.DoesNotExist:
            return Response({"error": "Usuário não encontrado."}, status=status.HTTP_404_NOT_FOUND)

class ChangePasswordView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        user = request.user
        current_password = request.data.get("current_password")
        new_password = request.data.get("new_password")
        confirm_password = request.data.get("confirm_password")

        print("Usuário autenticado?", request.user.is_authenticated)
        print("Usuário atual:", request.user.email)
        print("Senha recebida:", current_password)
        print("Senha confere?", request.user.check_password(current_password))

        if not user.check_password(current_password):
            return Response({"error": "Senha atual incorreta."}, status=status.HTTP_400_BAD_REQUEST)

        if new_password != confirm_password:
            return Response({"error": "As novas senhas não coincidem."}, status=status.HTTP_400_BAD_REQUEST)

        if current_password == new_password:
            return Response({"error": "A nova senha deve ser diferente da atual."}, status=status.HTTP_400_BAD_REQUEST)

        user.set_password(new_password)
        user.save()

        refresh_token = request.COOKIES.get("refresh_token")
        if refresh_token:
            try:
                refresh = RefreshToken(refresh_token)
                refresh.blacklist()
            except Exception:
                pass

        response = Response({"message": "Senha alterada com sucesso. Faça login novamente."}, status=status.HTTP_200_OK)

        response.delete_cookie("access_token", path="/")
        response.delete_cookie("refresh_token", path="/")

        response.set_cookie(
            key="access_token",
            value="",
            httponly=True,
            secure=True,
            samesite="None",
            path="/"
        )
        response.set_cookie(
            key="refresh_token",
            value="",
            httponly=True,
            secure=True,
            samesite="None",
            path="/"
        )

        return response
