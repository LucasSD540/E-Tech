from django.db import models

class User(models.Model):
  email = models.CharField(max_length=254, unique=True)
  password = models.CharField(max_length=128)
  created_at = models.DateTimeField(auto_now_add=True)
  last_login = models.DateTimeField(blank=True, null=True)
  is_staff = models.BooleanField(default=False)
  is_superuser = models.BooleanField(default=False)
  is_active = models.BooleanField(default=True)
  first_name = models.CharField()
