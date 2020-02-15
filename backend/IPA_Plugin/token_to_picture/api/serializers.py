from rest_framework import serializers
from token_to_picture.models import Diagram

class DiagramSerializer(serializers.ModelSerializer):
    class Meta:
        model = Diagram
        fields = ('pronunciation', 'image')
