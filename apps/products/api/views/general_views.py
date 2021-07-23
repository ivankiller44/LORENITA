from apps.base.api import GeneralListAPIView
from apps.products.api.serializers.general_serializers import UbicacionSerializer, DescripcionSerializer, FotosSerializer

class UbicacionListAPIView(GeneralListAPIView):
    serializer_class = UbicacionSerializer

class DescripcionListAPIView(GeneralListAPIView):
    serializer_class = DescripcionSerializer

class FotosListAPIView(GeneralListAPIView):
    serializer_class = FotosSerializer
