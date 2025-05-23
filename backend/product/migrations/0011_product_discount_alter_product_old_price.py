# Generated by Django 5.1.4 on 2025-02-21 15:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0010_remove_product_ispromo'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='discount',
            field=models.PositiveIntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='product',
            name='old_price',
            field=models.DecimalField(blank=True, decimal_places=2, default=0.0, max_digits=10),
        ),
    ]
