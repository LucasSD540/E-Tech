# Generated by Django 5.1.6 on 2025-03-11 14:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0019_alter_product_uuid_temp'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='uuid_temp',
        ),
        migrations.AlterField(
            model_name='product',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
