from django.contrib import admin
from django.urls import path, include
from user.viewsets import CookieTokenObtainPairView
from rest_framework_simplejwt.views import TokenRefreshView
from .views import home_page_view

urlpatterns = [
    path('', home_page_view, name='home'),
    path('api/token/', CookieTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('admin/', admin.site.urls),
    path('api/user/', include('user.urls')),
    path('api/product/', include('product.urls')),
    path('api/order/', include('order.urls')),
]
