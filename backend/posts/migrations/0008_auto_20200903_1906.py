# Generated by Django 3.0.8 on 2020-09-03 19:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0007_auto_20200903_1904'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='user_rating',
            field=models.IntegerField(null=True, verbose_name='User Rating'),
        ),
    ]
