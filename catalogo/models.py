from django.db import models

# Create your models here.
class Usuarios(models.Model):

    nick = models.CharField(max_length=15, primary_key=True)
    nombre = models.CharField(max_length=30)
    email = models.EmailField()
    contra = models.CharField(max_length=30)

# pip install pillow (para poder trabajar con imagenes)
class Imagenes(models.Model):
    id = models.IntegerField(primary_key=True)
    imagen = models.ImageField()   
