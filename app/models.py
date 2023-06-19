from django.db import models


class Game(models.Model):
    name = models.CharField(db_column='name_game', max_length=50, null=True)
    quantity = models.IntegerField(db_column='quantity_game', null=True)