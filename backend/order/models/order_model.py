from django.db import models
from user.models import Account

class Order(models.Model):
  STATUS_CHOICES = [
    ('pendente', 'Pendente'),
    ('pago', 'Pago'),
    ('cancelado', 'Cancelado'),
  ]
  customer = models.ForeignKey(
    Account,
    on_delete=models.CASCADE,
    related_name='orders'
  )
  status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pendente')
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)

  class Meta:
    db_table = 'tb_order'

  @property
  def total_price(self):
    return sum((item.product.price - item.discount) * item.quantity for item in self.items.all())

  def __str__(self):
    return f"Pedido {self.id} - {self.customer} - {self.status}"
