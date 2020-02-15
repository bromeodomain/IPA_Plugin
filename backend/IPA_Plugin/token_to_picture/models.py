from django.db import models

class Diagram(models.Model):
    pronunciation = models.CharField(max_length=5, default="")
    image = models.ImageField(upload_to='diagram_image')

    def __str__(self):
        return self.pronunciation
