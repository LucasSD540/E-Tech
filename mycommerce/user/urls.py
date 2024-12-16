from django.urls import path
from .viewsets import UserCreateView, UserListView, UserUpdateView, UserDeleteView

urlpatterns = [
    path('create/', UserCreateView.as_view(), name="create-account"),
    path('list/', UserListView.as_view(), name="list-account"),
    path('update/<int:pk>/', UserUpdateView.as_view(), name="update-account"),
    path('delete/<int:pk>/', UserDeleteView.as_view(), name="delete-account"),
]
