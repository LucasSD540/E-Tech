from django.utils.deprecation import MiddlewareMixin

class JWTAuthMiddleware(MiddlewareMixin):
    def process_request(self, request):
        if request.path in ["/api/user/auth/login/", "/api/user/auth/refresh/"]:
            return

        access_token = request.COOKIES.get('access_token')
        if access_token:
            request.META['HTTP_AUTHORIZATION'] = f'Bearer {access_token}'
