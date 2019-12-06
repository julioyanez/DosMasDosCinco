from django.contrib import admin

# Register your models here.

from .models import Usuarios, Imagenes

admin.site.register(Usuarios)
admin.site.register(Imagenes)