from django.urls import path
from .views import LoginView, LogoutView, CookieTokenRefreshView, UserCreateView, UserListView, UserDetailView, UserUpdateView, UserDeleteView, CheckIsAuth, PasswordResetRequestView, PasswordResetConfirmView

urlpatterns = [
    path('create/', UserCreateView.as_view(), name="create-account"),
    path('list/', UserListView.as_view(), name="list-account"),
    path('me/', UserDetailView.as_view(), name="detail-account"),
    path('auth/login/', LoginView.as_view(), name="login"),
    path('auth/refresh/', CookieTokenRefreshView.as_view(), name='token_refresh'),
    path('auth/logout/', LogoutView.as_view(), name="logout"),
    path('auth/me/', CheckIsAuth.as_view(), name="authenticated-account"),
    path('update/<int:pk>/', UserUpdateView.as_view(), name="update-account"),
    path('delete/<int:pk>/', UserDeleteView.as_view(), name="delete-account"),
    path('reset-password/', PasswordResetRequestView.as_view(), name='password_reset_request'),
    path('reset-password-confirm/<uidb64>/<token>/', PasswordResetConfirmView.as_view(), name='password_reset_confirm'),

]
