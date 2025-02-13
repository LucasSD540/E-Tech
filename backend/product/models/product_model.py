from django.db import models
from category.models import Category

class Product(models.Model):
  
  name = models.CharField(max_length=255)
  description = models.TextField()
  price = models.DecimalField(max_digits=10, decimal_places=2)
  stock = models.PositiveIntegerField(default=0)
  image_url = models.URLField(max_length=500, blank=True, null=True)
  category = models.ForeignKey(
    Category,
    on_delete=models.SET_NULL,
    null=True,
    blank=True,
    related_name='product_category'
  )
  isPromo = models.BooleanField(default=False)
  created_at = models.DateField(auto_now_add=True)
  updated_at = models.DateField(auto_now=True)

  class Meta:
    db_table = 'tb_product'

  def __str__(self):
    return self.name
