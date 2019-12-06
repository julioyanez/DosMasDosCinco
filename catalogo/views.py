from django.shortcuts import render
from django.views import generic
from .models import Imagenes

# Create your views here.
def index(request):
    images = Imagenes.objects.all()
    return render(request,'index.html', {'images': images})


def music(request):

    return render(request,'music.html')


def signup(request):

    return render(request,'signup.html')


#def login(request):

#    return render(request,'login.html')

