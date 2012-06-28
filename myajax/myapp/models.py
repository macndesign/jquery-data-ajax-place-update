from django.db import models

# Create your models here.
class Artigo(models.Model):
    titulo = models.CharField(max_length=100)
    corpo = models.TextField()
    
    def __unicode__(self):
        return self.titulo

from django.contrib import admin
admin.site.register(Artigo)
