from rest_framework import viewsets
from token_to_picture.models import Diagram
from .serializers import DiagramSerializer

class DiagramViewSet(viewsets.ModelViewSet):
    serializer_class = DiagramSerializer
    queryset  = Diagram.objects.all()
    lookup_field = "pronunciation"
