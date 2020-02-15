from token_to_picture.api.views import DiagramViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', DiagramViewSet, basename='diagrams')
urlpatterns = router.urls
