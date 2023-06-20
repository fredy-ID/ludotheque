import pytest
from django.urls import reverse, resolve
from .models import Game
from .source import Source


def test_should_reverse_string():
    source = Source()
    assert source.reverse_str('abc') == 'bac'

@pytest.mark.django_db    
def test_book_infos_url():
    Game.objects.create(name = "D & D", quantity = 5)
    path = reverse('game-list', kwargs={'pk':1})
    
    assert path == "game/1"
    assert resolve(path).view_name == "infos"

#TODO : Exemple de mock (python pur)
def test_main_function(monkeypatch):
    source = Source()

    def mockreturn():
        return 100
 
    monkeypatch.setattr(source, 'request', mockreturn)
 
    expected_value = 100
    assert source.main_function() == expected_value

