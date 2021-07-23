from django.contrib import admin
from apps.products.models import * 

# Register your models here.

admin.site.register(Ubicacion)
admin.site.register(Descripcion)
admin.site.register(Fotos)
admin.site.register(Propiedades)

