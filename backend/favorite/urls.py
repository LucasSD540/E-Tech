from django.urls import path
from .views import FavoriteCreateView, FavoriteListView, FavoriteRemoveView

urlpatterns = [
    path('create/', FavoriteCreateView.as_view(), name="create-favorite"),
    path('list/', FavoriteListView.as_view(), name="list-favorite"),
    path('delete/<int:product_id>/', FavoriteRemoveView.as_view(), name="delete-favorite"),
]
