from apps.base.api import GeneralListAPIView
from apps.products.api.serializers.general_serializers import DepartamentoSerializer, TipoDeBusSerializer, NumeroDeBusSerializer, FechaDeSalidaSerializer, HoraDeSalidaSerializer

class DepartamentoListAPIView(GeneralListAPIView):
    serializer_class = DepartamentoSerializer

class TipoDeBusListAPIView(GeneralListAPIView):
    serializer_class = TipoDeBusSerializer

class NumeroDeBusListAPIView(GeneralListAPIView):
    serializer_class = NumeroDeBusSerializer

class FechaDeSalidaListAPIView(GeneralListAPIView):
    serializer_class = FechaDeSalidaSerializer

class HoraDeSalidaListAPIView(GeneralListAPIView):
    serializer_class = HoraDeSalidaSerializer
