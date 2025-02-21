from django.urls import path
from .views import CartCreateView, CartListView, CartDetailView, CartUpdateView, CartDeleteView

urlpatterns = [
    path('create/', CartCreateView.as_view(), name='create-cart'),
    path('list/', CartListView.as_view(), name='create-cart'),
    path('detail/<int:pk>/', CartDetailView.as_view(), name='create-cart'),
    path('update/<int:pk>/', CartUpdateView.as_view(), name='create-cart'),
    path('delete/<int:pk>/', CartDeleteView.as_view(), name='create-cart'),
]
