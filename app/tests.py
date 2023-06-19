from django.test import TestCase
from app.models import Game


# Création d'une classe de test qui hérite de TestCase
class GameModelTest(TestCase):

    def setUp(self):
        """
            Méthode setUp pour initialiser les données de test
            Création d'une instance de Game à utiliser dans les tests
        """
        self.game = Game.objects.create(name="Monopoly", quantity=5)
        
    def test_game_name(self):
        """
            Test pour vérifier si le nom du jeu est correctement enregistré
            Récupération de l'instance de Game depuis la base de données
            Vérification que le nom du jeu est égal à "Monopoly"
        """
        game = Game.objects.get(id=self.game.id)
        self.assertEqual(game.name, "Monopoly")

    def test_game_quantity(self):
        """
            Test pour vérifier si la quantité du jeu est correctement enregistrée
            Récupération de l'instance de Game depuis la base de données
            Vérification que la quantité du jeu est égale à 5
        """
        game = Game.objects.get(id=self.game.id)
        self.assertEqual(game.quantity, 5)

    def test_db_column_names(self):
        """
            Test pour vérifier que les noms de colonnes de la base de données sont corrects
            Vérification que le nom de la colonne pour le champ 'name' est 'name_game'
            Vérification que le nom de la colonne pour le champ 'quantity' est 'quantity_game'
        """
        
        self.assertEqual(self.game._meta.get_field('name').db_column, 'name_game')
        self.assertEqual(self.game._meta.get_field('quantity').db_column, 'quantity_game')
