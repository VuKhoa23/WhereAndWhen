from django.urls import path, include
from . import views
urlpatterns = [
    path("", views.index, name="index"),
    path("login", views.login_view, name="login"),
    path("logout", views.logout_view, name="logout"),
    path("register", views.register, name="register"),


    path('trip', views.trip, name="weather"),
    path('trip/get-all', views.get_trips, name="get-trips"),
    path('trip/<int:id>', views.get_trip, name="get-trip"),
    path('trip/update-notes/<int:id>', views.update_notes, name="update-notes")
]
