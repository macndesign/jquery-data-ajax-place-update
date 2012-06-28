from django.conf.urls.defaults import url, patterns

urlpatterns = patterns('myapp.views',
    url(r'^$', 'index', name='index'),
    url(r'^listar/$', 'lista_artigos', name='listar'),
    url(r'^artigo/(?P<pk>\d+)/$', 'artigo', name='artigo'),
    url(r'^teste/$', 'teste', name='teste'),
    url(r'^error/$', 'error', name='error'),
    url(r'^error-404/$', 'error_404', name='error-404'),
    url(r'^error-500/$', 'error_500', name='error-500'),
)
