# Generated by Django 3.0.8 on 2020-08-11 11:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_auto_20200810_2201'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='profile_picture',
            field=models.ImageField(blank=True, default='default_profile_picture.png', upload_to='profile_pictures'),
        ),
    ]
