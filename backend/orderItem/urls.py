from django.urls import path
from .viewsets import OrderItemCreateView, OrderItemListView, OrderItemDetailView, OrderItemUpdateView, OrderItemDeleteView

urlpatterns = [
    path("create/", OrderItemCreateView.as_view(), name="create-orderItem"),
    path("list/", OrderItemListView.as_view(), name="list-orderItem"),
    path("detail/<int:pk>/", OrderItemDetailView.as_view(), name="detail-orderItem"),
    path("update/<int:pk>/", OrderItemUpdateView.as_view(), name="update-orderItem"),
    path("delete/<int:pk>/", OrderItemDeleteView.as_view(), name="delete-orderItem"),
]
