# Generated by Django 3.0.8 on 2020-09-03 17:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0005_auto_20200903_1507'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='user_rating',
            field=models.IntegerField(blank=True, default=0, verbose_name='User Rating'),
        ),
    ]