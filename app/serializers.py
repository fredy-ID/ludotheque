from rest_framework import serializers
from .models import Game

#*==============================
#? EMPLOYEES
#*==============================

class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = '__all__'