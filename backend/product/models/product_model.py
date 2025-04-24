from django.db import models
from category.models import Category

class Product(models.Model):  
  productName = models.CharField(max_length=255)
  weight = models.DecimalField(max_digits=6, decimal_places=2, default=00.00, help_text="Peso em kg")
  description = models.TextField()
  old_price = models.DecimalField(max_digits=10, decimal_places=2, default=00.00, blank=True)
  price = models.DecimalField(max_digits=10, decimal_places=2)
  discount = models.PositiveIntegerField(default=0)
  stock = models.PositiveIntegerField(default=0)
  image_url = models.URLField(max_length=500, blank=True, null=True)
  category = models.ForeignKey(
    Category,
    on_delete=models.SET_NULL,
    null=True,
    blank=True,
    related_name='product_category'
  )
  created_at = models.DateField(auto_now_add=True)
  updated_at = models.DateField(auto_now=True)

  def get_price(self):
    return round(self.price - ((self.price * self.discount) / 100), 2)

  class Meta:
    db_table = 'tb_product'

  def __str__(self):
    return self.productName
