from django.contrib import admin
from django.urls import path
# from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    # path('<string:ipa>', views.get_images, name='images')
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
