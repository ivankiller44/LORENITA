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
            'ubicacion' : instance.ubicacion.ubicacion,
            'descripcion' : instance.descripcion.descripcion,
        }