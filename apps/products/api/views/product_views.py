from apps.base.api import GeneralListAPIView
from apps.products.api.serializers.product_serializer import PropiedadSerializer

class PropiedadListAPIView(GeneralListAPIView):
    serializer_class = PropiedadSerializer    