from django import forms
from django.conf import settings

class EmailForm(forms.Form):
    name = forms.CharField(max_length=30)
    email = forms.EmailField()
    to = forms.EmailField(
        widget=forms.HiddenInput(),
        initial=settings.DEFAULT_TO_EMAIL
    )
    message = forms.CharField(
        required=True,
        widget=forms.Textarea
    )