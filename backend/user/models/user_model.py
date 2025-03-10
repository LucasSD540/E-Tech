from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser

class AccountManager(BaseUserManager):
  def create_user(self, email, password=None, **kwargs):

    if not email:
      raise ValueError("Email is required")

    email = self.normalize_email(email)
    user = self.model(email=email, **kwargs)
    user.set_password(password)
    user.save(using=self.db)
    return user
  
  def create_superuser(self, email, password=None, **kwargs):
    user = self.create_user(
      email=self.normalize_email(email),
      password=password
    )

    user.is_admin = True
    user.is_staff = True
    user.is_superuser = True
    user.save(using=self.db)
    return
  
  def get_by_natural_key(self, email):
        return self.get(email=email)

class Account(AbstractBaseUser):
  email = models.EmailField(max_length=254, unique=True)
  first_name = models.CharField(max_length=128)
  last_name = models.CharField(max_length=128)
  profile_picture = models.ImageField(upload_to=None, blank=True, null=True)
  created_at = models.DateTimeField(auto_now_add=True)
  last_login = models.DateTimeField(blank=True, null=True)
  is_admin = models.BooleanField(default=False)
  is_staff = models.BooleanField(default=False)
  is_superuser = models.BooleanField(default=False)
  is_active = models.BooleanField(default=True)

  objects = AccountManager()

  USERNAME_FIELD = "email"
  REQUIRED_FIELDS = []

  def __str__(self):
    return f"{self.first_name} {self.last_name}"

  def has_perm(self, perm, obj=None):
    return self.is_admin
  
  def has_module_perms(self, app_label):
    return self.is_admin
  
  def has_perms(self, perm_list, obj=None):
    return all(self.has_perm(perm, obj) for perm in perm_list)
