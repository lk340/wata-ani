# Generated by Django 3.0.8 on 2020-09-22 14:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='username',
            field=models.CharField(max_length=15, unique=True, verbose_name='username'),
        ),
    ]
