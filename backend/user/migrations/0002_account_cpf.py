# Generated by Django 5.1.6 on 2025-06-24 01:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='account',
            name='cpf',
            field=models.CharField(blank=True, max_length=11, null=True, unique=True),
        ),
    ]
