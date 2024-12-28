from django.urls import path
from .viewsets import ProductCreateView, ProductListView, ProductDetailView, ProductUpdateView, ProductDeleteView

urlpatterns = [
    path('create/', ProductCreateView.as_view(), name="create-product"),
    path('list/', ProductListView.as_view(), name="list-product"),
    path('detail/<int:pk>/', ProductDetailView.as_view(), name="detail-product"),
    path('update/<int:pk>/', ProductUpdateView.as_view(), name="update-product"),
    path('delete/<int:pk>/', ProductDeleteView.as_view(), name="delete-product"),
]
