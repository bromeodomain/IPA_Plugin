from rest_framework import viewsets
from english_to_ipa.models import Translation
from .serializers import TranslationSerializer
from django.shortcuts import get_object_or_404
from django.http import HttpResponse

class TranslationViewSet(viewsets.ModelViewSet):
    serializer_class = TranslationSerializer
    queryset  = Translation.objects.all()
