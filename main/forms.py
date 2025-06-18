from django import forms
from django.conf import settings


class EmailForm(forms.Form):
    name = forms.CharField(label='Name', max_length=30, widget=forms.TextInput(attrs={'placeholder': 'Type your name please'}))
    email = forms.EmailField(label='Email', widget=forms.EmailInput(attrs={'placeholder': 'Your email'}))
    to = forms.EmailField(
        widget=forms.HiddenInput(),
        initial=settings.DEFAULT_TO_EMAIL
    )
    message = forms.CharField(
        label='Message',
        required=True,
        widget=forms.Textarea(attrs={
            'class': 'form-control',
            'placeholder': 'Type your message...'
        })
    )