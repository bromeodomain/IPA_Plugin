from rest_framework import viewsets
from token_to_picture.models import Diagram
from .serializers import DiagramSerializer
from django.shortcuts import get_object_or_404
from django.http import HttpResponse

class DiagramViewSet(viewsets.ModelViewSet):
    serializer_class = DiagramSerializer
    queryset  = Diagram.objects.all()
    lookup_field = "pronunciation"

# class GetPictureViewSet(viewsets.ViewSet):
#     def retrieve(self, request, pk=None):
#         print('here')
#         print(pk)
#         serializer_class = DiagramSerializer
#         queryset = Diagram.objects.all()
#         lookup_field = "pronunciation"
#         diagram = get_object_or_404(queryset, pronunciation=pk).image
#         print(diagram)
#         image_data = open(diagram, "rb").read()
#         return HttpResponse(image_data, content_type="image/png")
