from rest_framework import serializers
from english_to_ipa.models import Translation
import english_to_ipa.english_to_ipa_api.eng_to_ipa as ipa

class TranslationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Translation
        fields = ['original_text', 'translated_text']

    def create(self, validated_data):
        data = validated_data.copy()
        data['original_text'] = validated_data['original_text']
        data['translated_text'] = validated_data['original_text']
        return super(TranslationSerializer, self).create(data)

    def update(self, instance, validated_data):
        data = validated_data.copy()
        data['original_text'] = validated_data['original_text']
        data['translated_text'] = ipa.convert(validated_data['original_text'])
        print(data)
        return super(TranslationSerializer, self).update(instance, data)
