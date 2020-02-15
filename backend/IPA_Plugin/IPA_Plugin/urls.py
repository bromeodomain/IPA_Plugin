from django.contrib import admin
from django.urls import path, include
# from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/', include('token_to_picture.api.urls')),
    path('translate/', include('english_to_ipa.api.urls')),
    # path('<string:ipa>', views.get_images, name='images')
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
