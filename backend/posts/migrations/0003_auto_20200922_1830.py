# Generated by Django 3.0.8 on 2020-09-22 18:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0002_auto_20200922_1422'),
    ]

    operations = [
        migrations.RenameField(
            model_name='post',
            old_name='text',
            new_name='review',
        ),
    ]