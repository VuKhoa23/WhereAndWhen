from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    pass

class Trip(models.Model):
    destination = models.CharField(max_length=100)
    date = models.DateField()
    user = models.ForeignKey(User, related_name="all_trips", on_delete=models.CASCADE, null=True, blank=True)
    is_visited = models.BooleanField(default=False)
    notes = models.TextField(max_length=3000, default="", blank=True, null=True)

    def __str__(self):
          return f"A trip to {self.destination} on {self.date} by {self.user}"
    
