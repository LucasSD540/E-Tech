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
  total_price = models.DecimalField(max_digits=10, decimal_places=2)
  status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pendente')
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)

  class Meta:
    db_table = 'tb_order'

  def __str__(self):
    return f"Pedido {self.id} - {self.customer} - {self.status}"
