from django.urls import path
from .views import CartItemCreateView, CartItemListView, CartItemDetailView, CartItemUpdateView, CartItemDeleteView

urlpatterns = [
    path('create/', CartItemCreateView.as_view(), name='create-cartItem'),
    path('list/', CartItemListView.as_view(), name='list-cartItem'),
    path('detail/', CartItemDetailView.as_view(), name='detail-cartItem'),
    path('update/<int:pk>/', CartItemUpdateView.as_view(), name='update-cartItem'),
    path('delete/<int:pk>/', CartItemDeleteView.as_view(), name='delete-cartItem'),
]

