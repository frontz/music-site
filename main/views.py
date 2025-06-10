from django.shortcuts import render
from .forms import EmailForm
from django.core.mail import send_mail

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
    form = EmailForm(request.POST or None)
    # initial_data = {'to': 'tom.frontz@gmail.com'}
    sent = False
    if request.method == "POST":
        form = EmailForm(request.POST)
        if form.is_valid():
            # pomyślnie zweryfikowano pola formularza
            cd = form.cleaned_data
            subject = (
                f"{cd['name']} ({cd['email']}) "
                f"napisał do Ciebie"
            )
            message = (
                f"{cd['message']}"
            )
            send_mail(
                subject=subject,
                message=message,
                from_email=None,
                recipient_list=[cd['to']],
            )
            sent = True
        else:
            form = EmailForm()
    return render(
        request,
        'main/contact.html',
        {
            'form': form,
            'sent': sent,
        }
    )

