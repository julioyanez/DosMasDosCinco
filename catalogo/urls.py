from django.urls import path
from . import views
from django.urls import include


urlpatterns = [
    path('',views.index,name='index'),
    path('explore/',views.music,name='music'),
    path('signup/',views.signup,name='signup'),
    #path('login/',views.login,name='login'),
    
]