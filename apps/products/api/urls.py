from django.urls import path

from apps.products.api.views.general_views import UbicacionListAPIView, DescripcionListAPIView, FotosListAPIView
from apps.products.api.views.product_views import PropiedadListAPIView

urlpatterns = [
    path('ubicacion/', UbicacionListAPIView.as_view(), name = 'ubicacion'),
    path('descripcion/', DescripcionListAPIView.as_view(), name = 'descripcion'),
    path('fotos/', FotosListAPIView.as_view(), name = 'fotos'),
    path('propiedades', PropiedadListAPIView.as_view(), name ='propiedades'),
]
