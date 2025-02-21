from django.db import models
from product.models import Product
from cart.models import Cart

class CartItem(models.Model):
  cart = models.ForeignKey(Cart, on_delete=models.CASCADE, related_name="items", null=True)
  product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='cart_items')
  quantity = models.PositiveIntegerField(default=1)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)

  class Meta:
    db_table = 'tb_cartItem'

  @property
  def total_price(self):
    return self.product.price * self.quantity 

  def __str__(self):
    return f"{self.quantity}x {self.product.name}"
