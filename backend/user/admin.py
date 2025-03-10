from django.contrib import admin
from .models import Account

@admin.register(Account)
class AccountAdmin(admin.ModelAdmin):
  list_display = ("email", "first_name", "last_name", "is_admin", "is_staff")
  search_fields = ("email", "first_name", "last_name")
  list_filter = ("is_admin", "is_staff", "is_superuser")
