from django.db import models
import uuid
from django.contrib.auth.models import User

# Create your models here.


class Habit(models.Model):
    owner = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='habits')
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, )
    name = models.CharField(max_length=100)


class Routine(models.Model):
    owner = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='habits')
    id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    name = models.CharField(max_length=100)
    habits = models.ManyToManyField(Habit, related_name='routines')


class HabbitCompletion(models.Model):
    habit = models.ForeignKey(
        Habit, on_delete=models.CASCADE, related_name='completions')
    date = models.DateTimeField()


class RoutineCompletion(models.Model):
    habit = models.ForeignKey(
        Routine, related_name='completions')
    date = models.DateTimeField()
    level_of_completion = models.FloatField()
