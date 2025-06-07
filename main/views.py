from django.shortcuts import render
from .forms import EmailForm

def home(request):
    return render(
        request,
        'main/home.html',
    )

def about(request):
    return render(
        request,
        'main/about.html',
    )

def contact(request):
    return render(
        request,
        'main/contact.html',
    )

def solo_albums(request):
    return render(
        request,
        'main/solo_albums.html',
    )

def film_music(request):
    return render(
        request,
        'main/filmmusic.html',
    )

def basket(request):
    return render(
        request,
        'main/basket.html',
    )

def send_email(request):
    if request.method == "POST":
        form = EmailForm(request.POST)
        if form.is_valid():
            # pomyślnie zweryfikowano pola formularza
            cd = form.cleaned_data
            # ... wyślij email
        else:
            form = EmailForm()
    return render(
        request,
        'main/contact.html',
        {
            'form': form,
        }
    )

