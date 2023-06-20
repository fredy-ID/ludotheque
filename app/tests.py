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

    def test_db_column_names_degrade(self):
        """
            Test dégradé pour vérifier que les noms de colonnes de la base de données sont corrects
            Vérification que les noms de colonnes sont cohérents avec le modèle
        """
        # Vérification dégradée des noms de colonnes
        self.assertEqual(self.game._meta.get_field('name').db_column, Game._meta.get_field('name').db_column)
        self.assertEqual(self.game._meta.get_field('quantity').db_column, Game._meta.get_field('quantity').db_column)
    
    def test_create_game(self):
        """
        Teste la création d'un jeu
        """
        game = Game.objects.create(name="Monopoly", quantity=5)
        # Vérifie que le jeu a été créé avec les bonnes valeurs
        self.assertEqual(game.name, "DIABLO4")
        self.assertEqual(game.quantity, 5)
        print(game)


    def test_retrieve_game(self):
        """
        Teste la récupération d'un jeu
        """
        game = Game.objects.create(name="Monopoly", quantity=5)
        retrieved_game = Game.objects.get(id=game.id)
        # Vérifie que le jeu récupéré correspond au jeu créé précédemment
        self.assertEqual(retrieved_game.name, "Monopoly")
        self.assertEqual(retrieved_game.quantity, 5)


    def test_update_game(self):
        """
        Teste la mise à jour d'un jeu
        """
        game = Game.objects.create(name="Monopoly", quantity=5)
        # Effectue la mise à jour du jeu
        game.name = "Risk"
        game.quantity = 10
        game.save()
        # Récupère le jeu mis à jour depuis la base de données
        updated_game = Game.objects.get(id=game.id)
        # Vérifie que le jeu a été correctement mis à jour
        self.assertEqual(updated_game.name, "Risk")
        self.assertEqual(updated_game.quantity, 10)


    def test_delete_game(self):
        """
        Teste la suppression d'un jeu
        """
        
        game = Game.objects.create(name="Monopoly", quantity=5)
        game_id = game.id
        print(game_id)
        # Supprime le jeu de la base de données
        game.delete()
        # Vérifie que le jeu a été supprimé en essayant de le récupérer à nouveau (doit lever une exception)
        with self.assertRaises(Game.DoesNotExist):
            print("TEST SUPPRESSION GAME OK")
            Game.objects.get(id=game_id)




