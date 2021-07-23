from rest_framework import serializers

from apps.products.models import Propiedades
from apps.products.api.serializers.general_serializers import UbicacionSerializer, DescripcionSerializer, FotosSerializer

class PropiedadSerializer(serializers.ModelSerializer):
    #measure_unit = serializers.StringRelatedField()
    #category_product = serializers.StringRelatedField()
    #origen = serializers.StringRelatedField()
    

    class Meta: 
        model = Propiedades
        exclude = ('state', 'created_date', 'modified_date', 'deleted_date')

    def to_representation(self, instance):
        return {
 
            'id' : instance.id,
            'origen' : instance.origen.origen,
            'destino' : instance.destino.destino,
            'tipo_de_bus' : instance.tipo_de_bus.tipo,
            'numero_de_bus' : instance.numero_de_bus.numero_de_bus,
            'fecha_de_salida' : instance.fecha_de_salida.fecha_de_salida,
            'hora_de_salida' : instance.hora_de_salida.hora_de_salida,
            'estado' : instance.estado,
            'precio' : instance.precio,
        }