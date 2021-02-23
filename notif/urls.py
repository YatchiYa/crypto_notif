from django.urls import path
from .views import notify, get_currency

urlpatterns = [
    path('notify/', notify.as_view()),
    path('get-curr/', get_currency.as_view()),
]