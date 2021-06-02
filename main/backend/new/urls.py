"""new URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from core.views import test_view, map_data
from django.contrib import admin
from django.urls import path
# from django.conf.urls import include
from django.views.generic import TemplateView
from first_app import views

urlpatterns = [
    path('map/', map_data, name='map'),
    path('admin/', admin.site.urls),
    path('leikkipaikat/', test_view, name='test'),
]
