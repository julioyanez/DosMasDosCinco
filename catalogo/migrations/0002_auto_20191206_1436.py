# Generated by Django 2.2.6 on 2019-12-06 17:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('catalogo', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='imagenes',
            name='imagen',
            field=models.ImageField(upload_to='imagenes/'),
        ),
    ]
