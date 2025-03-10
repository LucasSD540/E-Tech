from django.urls import path
from .views import LoginView, LogoutView, CookieTokenRefreshView, UserCreateView, UserListView, UserDetailView, UserUpdateView, UserDeleteView, check_is_auth

urlpatterns = [
    path('create/', UserCreateView.as_view(), name="create-account"),
    path('list/', UserListView.as_view(), name="list-account"),
    path('me/', UserDetailView.as_view(), name="detail-account"),
    path('auth/login/', LoginView.as_view(), name="login"),
    path('auth/refresh/', CookieTokenRefreshView.as_view(), name='token_refresh'),
    path('auth/logout/', LogoutView.as_view(), name="logout"),
    path('auth/me/', check_is_auth, name="authenticated-account"),
    path('update/<int:pk>/', UserUpdateView.as_view(), name="update-account"),
    path('delete/<int:pk>/', UserDeleteView.as_view(), name="delete-account"),
]
