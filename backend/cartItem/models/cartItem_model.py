from django.db import models
from user.models import Account
from product.models import Product

class CartItem(models.Model):
  user = models.ForeignKey(Account, on_delete=models.CASCADE, related_name='cart_items')
  product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='cart_items')
  quantity = models.PositiveIntegerField(default=1)
  price = models.DecimalField(max_digits=10, decimal_places=2)
  total_price = models.DecimalField(max_digits=10, decimal_places=2)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)

  def save(self, *args, **kwargs):
    self.total_price = (self.price - self.discount) * self.quantity
    super().save(*args, **kwargs)

  def __str__(self):
    return f"{self.quantity}x {self.product.name}"
