from django.urls import path
from .views import current_user, UserList, update_pass

urlpatterns = [
    path('current_user/', current_user),
    path('users/', UserList.as_view()),
    path('update_pass/', update_pass.as_view()),
]