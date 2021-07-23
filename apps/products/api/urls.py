from django.urls import path

from apps.products.api.views.general_views import UbicacionListAPIView, DescripcionListAPIView, FotosListAPIView
from apps.products.api.views.product_views import PropiedadListAPIView

urlpatterns = [
    path('ubicacion/', UbicacionListAPIView.as_view(), name = 'origen'),
    path('descripcion/', DescripcionListAPIView.as_view(), name = 'destino'),
    path('fotos/', FotosListAPIView.as_view(), name = 'numerodebus'),
]
