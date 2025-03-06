from django.urls import path
from .views import calculate_shipping

urlpatterns = [
    path("calculate-shipping/", calculate_shipping, name="calculate-shipping")
]

