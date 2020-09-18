# Generated by Django 3.0.8 on 2020-09-18 14:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tags', '0004_remove_tag_posts'),
        ('posts', '0014_remove_post_tags'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='tags',
            field=models.ManyToManyField(blank=True, to='tags.Tag', verbose_name='Post Tags'),
        ),
    ]
