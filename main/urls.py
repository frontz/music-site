from django.urls import path
from . import views

app_name = 'main'

urlpatterns = [
    path('', views.home, name='home'),
    path('about', views.about, name='about'),
    path('contact', views.contact, name='contact'),
    path('solo_albums', views.solo_albums, name='solo_albums'),
    path('film_music', views.film_music, name='film_music'),
    path('contact', views.contact, name='contact'),
    path('basket', views.basket, name='basket'),
]