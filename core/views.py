from django.shortcuts import render

# Create your views here.
from django.http import HttpResponseRedirect
from django.contrib.auth.models import User
from rest_framework import permissions, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth import authenticate
from .serializers import UserSerializer, UserSerializerWithToken, PasswordSerializer


@api_view(['GET'])
def current_user(request):

    serializer = UserSerializer(request.user)
    return Response(serializer.data)


class update_pass(APIView):
    serializer_class = UserSerializer

    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        u = User.objects.get(username=request.data.get("username"))
        user = authenticate(username=request.data.get("username"), password=request.data.get("oldpass"))
        if user is not None:
            print("user authentificated")
            u.set_password( request.data.get("newpass"))
            u.save()
            return Response(u, status=status.HTTP_201_CREATED)
        else:
            print("error")
            return Response("false", status=status.HTTP_400_BAD_REQUEST)

class UserList(APIView):

    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = UserSerializerWithToken(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)