from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.db import IntegrityError
from django.http import JsonResponse
from django.shortcuts import HttpResponse, HttpResponseRedirect, render
from django.urls import reverse
from django.views.decorators.csrf import csrf_exempt
from .models import User
import requests
import math
import json
from datetime import datetime, date


from .models import User, Trip

key = '5527b27344a4eddda6e28fcc171f2948'


def index(request):
    # Authenticated users can use the app
    if request.user.is_authenticated:
        return render(request, "trip/trip.html")

    # Everyone else is prompted to sign in
    else:
        return HttpResponseRedirect(reverse("login"))


@csrf_exempt
@login_required
def trip(request):
    if request.method == "POST":
        body = json.loads(request.body)
        city = body['city']
        country = body['country']
        if country == "":
            query = f"{city}"
        else:
            query = f"{city},{country.lower()}"
        submit_date = body['submit_date']
        url = f"https://api.openweathermap.org/data/2.5/weather?q={query}&appid={key}"
        print(url)
        data = requests.get(url).json()
        if data['cod'] == '404':
            return JsonResponse({
                'message': "Failed, city doesnt exist"
            })
        result = {
            'city': data['name'],
            'temp': math.floor(data['main']['temp'] - 273.15),
            'humidity': data['main']['humidity'],
            'windspeed': math.floor(data['wind']['speed'] * 3.6),
            'des': data['weather'][0]['description'].capitalize(),
            'img': data['weather'][0]['icon'],
            'feel': math.floor(data['main']['feels_like'] - 273.15),
            'date': submit_date
        }

        current_day = date.today()
        submit_day = datetime.strptime(submit_date, "%Y-%m-%d").date()

        # check if the trip already exists
        trips = Trip.objects.filter(user=request.user)
        for tmp_trip in trips:
            if (submit_day == tmp_trip.date) and (tmp_trip.destination == data['name']):
                print(f"{tmp_trip.destination} vs {data['name']}")
                print(f"{submit_day} vs {tmp_trip.date}")
                return JsonResponse({
                    'message': "Failed, this trip already exists"
                })

        delta = submit_day - current_day

        if delta.days > 0:
            is_visited = False
        else:
            is_visited = True

        trip = Trip(destination=data['name'], date=submit_day,
                    user=request.user, is_visited=is_visited)
        trip.save()
        print(result)
        return JsonResponse({
            'message': ''
        })


@csrf_exempt
@login_required
def get_trip(request, id):
    if request.method == 'GET':
        user = request.user
        update_visit_status(user)
        trip = Trip.objects.get(id=id)
        url = f"https://api.openweathermap.org/data/2.5/weather?q={trip.destination}&appid={key}"
        data = requests.get(url).json()

        current_day = date.today()
        delta = trip.date - current_day
        delta = delta.days
        result = {
            'id': trip.id,
            'city': data['name'],
            'temp': math.floor(data['main']['temp'] - 273.15),
            'humidity': data['main']['humidity'],
            'windspeed': math.floor(data['wind']['speed'] * 3.6),
            'des': data['weather'][0]['description'].capitalize(),
            'img': data['weather'][0]['icon'],
            'feel': math.floor(data['main']['feels_like'] - 273.15),
            'date': trip.date,
            'delta': delta,
            'notes': trip.notes,
        }
        return JsonResponse({
            'data': result
        })

    elif request.method == 'DELETE':
        trip = Trip.objects.get(id=id)
        trip.delete()
        return JsonResponse({
            'message': 'Deleted'
        })
    elif request.method == 'PUT':
        trip = Trip.objects.get(id=id)
        body = json.loads(request.body)
        current_day = date.today()
        submit_date = body['date']
        submit_day = datetime.strptime(submit_date, "%Y-%m-%d").date()

        # check if the trip already exists
        trips = Trip.objects.filter(user=request.user)
        for tmp_trip in trips:
            if (submit_day == tmp_trip.date) and (tmp_trip.destination == trip.destination):
                print(tmp_trip.destination)
                print(trip.destination)
                return JsonResponse({
                    'message': "Failed, this trip already exists"
                })

        delta = submit_day - current_day

        if (delta.days > 0):
            trip.is_visited = False
        else:
            trip.is_visited = True

        trip.date = body['date']
        trip.save()
        return JsonResponse({
            'message': ''
        })


def update_visit_status(user):
    trips = Trip.objects.filter(user=user)
    for trip in trips:
        current_day = date.today()
        delta = trip.date - current_day
        if delta.days > 0:
            trip.is_visited = False
            trip.save()
        else:
            trip.is_visited = True
            trip.save()


@login_required
def get_trips(request):
    user = request.user
    update_visit_status(user)
    trips = Trip.objects.filter(user=user, is_visited=True)
    trips = trips.order_by("date").all()
    data_reponse_visited = []
    for trip in trips:
        print(trip)
        url = f"https://api.openweathermap.org/data/2.5/weather?q={trip.destination}&appid={key}"
        data = requests.get(url).json()
        result = {
            'id': trip.id,
            'city': data['name'],
            'temp': math.floor(data['main']['temp'] - 273.15),
            'humidity': data['main']['humidity'],
            'windspeed': math.floor(data['wind']['speed'] * 3.6),
            'des': data['weather'][0]['description'].capitalize(),
            'img': data['weather'][0]['icon'],
            'feel': math.floor(data['main']['feels_like'] - 273.15),
            'date': trip.date
        }
        data_reponse_visited.append(result)

    trips = Trip.objects.filter(user=user, is_visited=False)
    trips = trips.order_by("date").all()
    data_reponse_unvisited = []
    for trip in trips:
        print(trip)
        url = f"https://api.openweathermap.org/data/2.5/weather?q={trip.destination}&appid={key}"
        data = requests.get(url).json()
        result = {
            'id': trip.id,
            'city': data['name'],
            'temp': math.floor(data['main']['temp'] - 273.15),
            'humidity': data['main']['humidity'],
            'windspeed': math.floor(data['wind']['speed'] * 3.6),
            'des': data['weather'][0]['description'].capitalize(),
            'img': data['weather'][0]['icon'],
            'feel': math.floor(data['main']['feels_like'] - 273.15),
            'date': trip.date
        }
        data_reponse_unvisited.append(result)

    return JsonResponse({
        'data_visited': data_reponse_visited,
        'data_unvisited': data_reponse_unvisited
    })


@csrf_exempt
@login_required
def update_notes(request, id):
    if request.method == "PUT":
        trip = Trip.objects.get(id=id)
        body = json.loads(request.body)
        trip.notes = body['notes']
        trip.save()

        return JsonResponse({
            'message': 'good',
        })


def login_view(request):
    if request.method == "POST":

        # Attempt to sign user in
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)

        # Check if authentication successful
        if user is not None:
            login(request, user)
            return HttpResponseRedirect(reverse("index"))
        else:
            return render(request, "trip/login.html", {
                "message": "Invalid username and/or password."
            })
    else:
        return render(request, "trip/login.html")


def logout_view(request):
    logout(request)
    return HttpResponseRedirect(reverse("index"))


def register(request):
    if request.method == "POST":
        username = request.POST["username"]

        # Ensure password matches confirmation
        password = request.POST["password"]
        confirmation = request.POST["confirmation"]
        if password != confirmation:
            return render(request, "trip/register.html", {
                "message": "Passwords must match."
            })

        # Attempt to create new user
        try:
            user = User.objects.create_user(username, username, password)
            user.save()
        except IntegrityError as e:
            print(e)
            return render(request, "trip/register.html", {
                "message": "Username already taken."
            })
        login(request, user)
        return HttpResponseRedirect(reverse("index"))
    else:
        return render(request, "trip/register.html")
