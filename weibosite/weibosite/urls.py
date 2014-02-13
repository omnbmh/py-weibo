from django.conf.urls import patterns, include, url
from django.contrib import admin
from weibosite.view import hello, home, signin, signout, ctime, send
from weibosite.api import auth_login, auth_callback, weibo_public, weibo_post

admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'firstsite.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
	
	# page 
	url('^$', home),
    url('^signin$',signin),
	url('^signout$',signout),
	
	url(r'^admin/', include(admin.site.urls)),
	url(r'^hello/$', hello),
	url(r'^time/$', 'firstsite.view.current_datetime', name='current_datetime'),
	url(r'^time/(\d{1,2})/$', ctime),
	url(r'^time/plus/(\d{1,2})/$','firstsite.view.hours_add', name='time-plus'), 
	url(r'^person/$','firstsite.view.person', name='person'), 
	#url(r'^.*$', 'firstsite.view.error', name='error'),
	
	# api
	url('^api/auth/login$', auth_login),
	url('^api/auth/callback$', auth_callback),
	url('^api/weibo/public$', weibo_public),
	url('^api/weibo/post$', weibo_post),
)
