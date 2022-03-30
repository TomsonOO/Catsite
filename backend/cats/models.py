from django.db import models


class Cat(models.Model):
  name = models.CharField(max_length=40, null=True, blank=True)
  image = models.ImageField(null=True, blank=True, upload_to="images")
  
