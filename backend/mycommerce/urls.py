from django.contrib import admin
from django.urls import path, include
from user.views import CookieTokenObtainPairView, LogoutView
from rest_framework_simplejwt.views import TokenRefreshView
from .views import home_page_view
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView, SpectacularRedocView

urlpatterns = [
    path('', home_page_view, name='home'),
    path('api/schema/', SpectacularAPIView.as_view(), name='schema'),
    path('api/swagger/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
    path('api/redoc/', SpectacularRedocView.as_view(url_name='schema'), name='redoc'),
    path('api/token/', CookieTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/logout/', LogoutView.as_view(), name='remove_token'),
    path('admin/', admin.site.urls),
    path('api/user/', include('user.urls')),
    path('api/product/', include('product.urls')),
    path('api/order/', include('order.urls')),
    path('api/orderItem/', include('orderItem.urls')),
    path('api/category/', include('category.urls')),
    path('api/cart/', include('cart.urls')),
    path('api/cartItem/', include('cartItem.urls')),
]
