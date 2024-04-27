from django.http import HttpResponseRedirect
from django.templatetags.static import static

def home(request):
    return HttpResponseRedirect(static('index.html'))