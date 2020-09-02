# Generated by Django 3.0.8 on 2020-09-02 17:16

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=20, verbose_name='Post Title')),
                ('series_title', models.CharField(max_length=100, verbose_name='Series Title')),
                ('text', models.TextField(max_length=500, verbose_name='Post Text')),
                ('author_rating', models.IntegerField(verbose_name='Author Rating')),
                ('user_rating', models.IntegerField(verbose_name='User Rating')),
            ],
        ),
    ]