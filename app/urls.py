from django.urls import path
from .views import GameListCreateView, GameRetrieveUpdateDestroyView

urlpatterns = [
    path('game/', GameListCreateView.as_view(), name='app-game-list'),
    path('game/<int:pk>/', GameRetrieveUpdateDestroyView.as_view(), name='app-game-detail'),
]
