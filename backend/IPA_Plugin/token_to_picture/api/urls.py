from token_to_picture.api.views import DiagramViewSet# , GetPictureViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', DiagramViewSet, basename='diagrams')
# router.register(r'getpic', GetPictureViewSet, basename='diagrams')
urlpatterns = router.urls
