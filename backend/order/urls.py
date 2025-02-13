from django.urls import path
from .views import OrderCreateView, OrderListView, OrderDetailView, OrderDeleteView, OrderUpdateView

urlpatterns = [
    path('create/', OrderCreateView.as_view(), name="create-order"),
    path('list/', OrderListView.as_view(), name="list-order"),
    path('detail/<int:pk>/', OrderDetailView.as_view(), name="detail-order"),
    path('update/<int:pk>/', OrderUpdateView.as_view(), name="update-order"),
    path('delete/<int:pk>/', OrderDeleteView.as_view(), name="delete-order"),
]
