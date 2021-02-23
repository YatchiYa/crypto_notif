from django.shortcuts import render

# Create your views here.from django.shortcuts import render

# Create your views here.

from django.http import HttpResponseRedirect
from django.contrib.auth.models import User
from rest_framework import permissions, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth import authenticate
import json
import requests
import pandas as pd
import datetime as dt
from currency_converter import CurrencyConverter
from django.core import mail
import smtplib, ssl
from smtplib import SMTP
# Step 1 - Import required packages
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from django.http import JsonResponse



class notify(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        print("test")
        api_key = "D53DDF4E-6B2A-411A-8384-BCCD2C84CD0B"
        url = "https://rest.coinapi.io/v1/assets"
        headers = {"X-CoinAPI-Key" : api_key}
        response = requests.get(url, headers = headers)

        if(response.status_code == 429):
            # API response
            print("Too many requests.")
        else:
            assets = response.json()
            print(request.data)
            monnaie = [a for a in assets if a['asset_id'] == request.data.get('mona')]
            #print(monnaie)
            price_limit = float(request.data.get('price'))
            price_type = request.data.get('mox')
            price_usd = monnaie[0]['price_usd']
            c = CurrencyConverter()

                    
            server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
            server.login("crypto.test.notif@gmail.com", "Crypto!%22")

            if (price_type == "EUR" ):
                price_limit = c.convert(price_limit, 'EUR', 'USD')

            if (request.data.get('type') == "A"):
                print("hi ")
                if (price_limit > price_usd):
                    print("hi 2")
                    msg = "Notification : price of " + request.data.get('mona') + " is above of the limite you fixed : " + request.data.get('price')  + "USD"
                    server.sendmail(
                    "yatchi.leet@gmail.com", 
                    "yatchi.leet@gmail.com", 
                    msg)
                    server.quit()
                    return Response("ok", status=status.HTTP_201_CREATED)
            if (request.data.get('type') == "B"):
                print("hooo ")
                if (price_limit < price_usd):
                    print("hooo 3")
                    msg = "Notification : price of " + request.data.get('mona') + " is bellow of the limite you fixed : " + request.data.get('price')  + "USD"
                    server.sendmail(
                    "yatchi.leet@gmail.com", 
                    "yatchi.leet@gmail.com", 
                    msg)
                    server.quit()
                    return Response("ok", status=status.HTTP_201_CREATED)


                    
class get_currency(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request):
        print("test")
        api_key = "D53DDF4E-6B2A-411A-8384-BCCD2C84CD0B"
        url = "https://rest.coinapi.io/v1/assets"
        headers = {"X-CoinAPI-Key" : api_key}
        response = requests.get(url, headers = headers)
        return JsonResponse(response.json(), safe=False)

