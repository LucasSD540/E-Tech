from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework_simplejwt.exceptions import InvalidToken, TokenError, ExpiredTokenError
from rest_framework.exceptions import AuthenticationFailed
from django.utils.translation import gettext_lazy as _

class CookieJWTAuthentication(JWTAuthentication):
    def authenticate(self, request):
        access_token = request.COOKIES.get("access_token")

        if not access_token:
            return None
        
        try:
            validated_token = self.get_validated_token(access_token)
            return self.get_user(validated_token), validated_token
        except ExpiredTokenError:
            raise AuthenticationFailed(_("Token expirado"), code="token_expired")
        except (InvalidToken, TokenError):
            raise AuthenticationFailed(_("Token inválido"), code="token_invalid")
