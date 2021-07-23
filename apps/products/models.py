from django.db import models
from simple_history.models import HistoricalRecords

from apps.base.models import BaseModel
# Create your models here.


class Ubicacion(BaseModel):

    # TODO> Define Fields Here
    ubicacion = models.CharField('Ubicacion', max_length=50, blank=False, null=True, unique=True)
    historical = HistoricalRecords()

    @property
    def _history_user(self):
        return self.changed_by

    @_history_user.setter
    def _history_user(self, value):
        self.changed_by = value

    class Meta:
        verbose_name = ("Ubicacion")
        verbose_name_plural = ("Ubicaciones")

    def __str__(self):
        return self.ubicacion

class Descripcion(BaseModel):

    # TODO> Define Fields Here
    descripcion = models.CharField('Departamento', max_length=50, blank=False, null=True, unique=True)
    historical = HistoricalRecords()

    @property
    def _history_user(self):
        return self.changed_by

    @_history_user.setter
    def _history_user(self, value):
        self.changed_by = value

    class Meta:
        verbose_name = ("Descripcion")
        verbose_name_plural = ("Descripciones")

    def __str__(self):
        return self.descripcion

class Fotos(BaseModel):

    # TODO> Define Fields Here
    fotos = models.CharField('Despartamento1', max_length=50, blank=False, null=True, unique=True)
    historical = HistoricalRecords()

    @property
    def _history_user(self):
        return self.changed_by

    @_history_user.setter
    def _history_user(self, value):
        self.changed_by = value

    class Meta:
        verbose_name = ("Foto")
        verbose_name_plural = ("Fotos")

    def __str__(self):
        return self.fotos


class Propiedades(BaseModel):

    name = models.CharField('Nombre De La Propiedad', max_length=150, unique=True, blank=False, null=True)


    @property
    def _history_user(self):
        return self.changed_by

    @_history_user.setter
    def _history_user(self, value):
        self.changed_by = value

    class Meta:
        verbose_name = ("Propiedad")
        verbose_name_plural = ("Propiedades")

    def __str__(self):
        return self.name
