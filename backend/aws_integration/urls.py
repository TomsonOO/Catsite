from django.urls import path
from . import views

urlpatterns = [
    path('list-public-images/', views.list_public_images, name='list_public_images'),
]
