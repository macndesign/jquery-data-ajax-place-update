# Create your views here.
from models import Artigo
from django.shortcuts import render, get_object_or_404
from django.template import RequestContext

def index(request):
    artigos = Artigo.objects.all()
    return render(request, 'base.html', {"artigos": artigos})

def lista_artigos(request):
    artigos = Artigo.objects.all()
    return render(request, 'myapp/artigos.html', {"artigos": artigos})

def artigo(request, pk):
    artigo = get_object_or_404(Artigo, pk=pk)
    return render(request, 'myapp/artigo.html', {"artigo": artigo})

def teste(request):
    return render(request, 'myapp/teste.html', {"name": "mario"})

def error(request):
    return render(request, 'error.html')

def error_404(request):
    return render(request, '404.html')

def error_500(request):
    return render(request, '500.html')
