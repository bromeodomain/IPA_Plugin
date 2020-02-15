from django.shortcuts import render

# Create your views here.

# ipa --> image
def get_images(request, ipa):
    return HttpResponse("IPA Code: " % ipa)
