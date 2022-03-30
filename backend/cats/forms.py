from django import forms
from cats.models import Cat

# Form used for adding images with zip file
class CatForm(forms.ModelForm):
  class Meta:
    model = Cat
    exclude = []

  zip = forms.FileField(required=False)
