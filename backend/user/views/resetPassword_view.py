from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.tokens import default_token_generator
from django.core.mail import send_mail
from django.contrib.auth import get_user_model
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes, force_str
from decouple import config

User = get_user_model()

class PasswordResetRequestView(APIView):
    def post(self, request, *args, **kwargs):
        email = request.data.get('email')
        try:
            user = User.objects.get(email=email)
            token = default_token_generator.make_token(user)
            uid = urlsafe_base64_encode(force_bytes(user.pk))
            reset_link = f"http://localhost:3000/reset-password/{uid}/{token}/"

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
