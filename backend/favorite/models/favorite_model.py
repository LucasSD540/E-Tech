from django.db import models
from user.models import Account
from product.models import Product

class Favorite(models.Model):
  customer = models.ForeignKey(
    Account,
    on_delete=models.CASCADE,
    related_name='favorites'
  )
  product = models.ForeignKey(
    Product,
    on_delete=models.CASCADE,
    related_name='favorited'
  )

  class Meta:
        unique_together = ('customer', 'product')
        db_table = 'tb_favorite'

  def __str__(self):
        return f"Usuário {self.customer.first_name}, produto {self.product.name}"
