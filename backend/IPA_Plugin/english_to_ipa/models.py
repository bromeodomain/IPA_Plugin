from django.db import models

class Translation(models.Model):
    original_text = models.TextField(default="")
    translated_text = models.TextField(default="")

    def __str__(self):
        return "content"
