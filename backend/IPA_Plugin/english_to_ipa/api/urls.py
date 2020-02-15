from english_to_ipa.api.views import TranslationViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', TranslationViewSet, basename='translation')
urlpatterns = router.urls
