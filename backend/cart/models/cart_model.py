from django.db import models
from user.models import Account

class Cart(models.Model):
  user = models.ForeignKey(Account, null=True, blank=True, on_delete=models.CASCADE)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)
  is_active = models.BooleanField(default=True)

  def __str__(self):
    return f"Carrinho de {self.user.first_name if self.user else 'Usuário Anônimo'}"
