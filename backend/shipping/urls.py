from django.urls import path
from .views import calculate_freight

urlpatterns = [
    path("calculate-shipping/", calculate_freight, name="calculate-shipping")
]

