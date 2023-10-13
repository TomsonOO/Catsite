from django.urls import path
from .views import ListImagesAPIView

urlpatterns = [
    path("listImages/", ListImagesAPIView.as_view(), name="listImages"),
]