from django import forms

class EmailForm(forms.Form):
    name = forms.CharField(max_length=30)
    email = forms.EmailField()
    to = forms.EmailField()
    subject = forms.CharField(
        required=True,
        widget=forms.Textarea
    )