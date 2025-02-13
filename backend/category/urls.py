from django.urls import path
from .views import CategoryCreateView, CategoryListView, CategoryUpdateView, CategoryDeleteView

urlpatterns = [
  path('create/', CategoryCreateView.as_view(), name="create-category"),
  path('list/', CategoryListView.as_view(), name="list-category"),
  path('update/<int:pk>/', CategoryUpdateView.as_view(), name="update-category"),
  path('delete/<int:pk>/', CategoryDeleteView.as_view(), name="delete-category"),
]
