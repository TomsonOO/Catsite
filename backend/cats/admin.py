from django.contrib import admin
from .models import Cat
from cats.forms import CatForm
from django.core.files.base import ContentFile

import zipfile
import os


# Class that makes it possible to add multiple images to database with zip file
class ZipCat(admin.ModelAdmin):
  list_display = ('id', 'name', 'image') 
  form = CatForm

  def save_model(self, request, obj, form, change):
    if form.is_valid():
      if form.cleaned_data['zip'] != None:
        zip = zipfile.ZipFile(form.cleaned_data['zip'])
        for filename in sorted(zip.namelist()):

          file_name = os.path.basename(filename)
          if not file_name:
            continue

          data = zip.read(filename)
          file = Cat()
          file.name = filename

          contentfile = ContentFile(data)
          file.image.save(filename, contentfile)

          file.save()
      
        zip.close()
      super(ZipCat, self).save_model(request, obj, form, change)


admin.site.register(Cat, ZipCat)