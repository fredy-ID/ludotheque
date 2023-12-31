# ludotheque

Un repo me servant référence pour apprendre à faire des tests unitaires en front (vuejs) et back (django)

## Backend
 
## Créer et activer l'environnement virtuel

```sh
python -m virtualenv .env
./.env\Scripts\activate
```

ou

```sh
python -m venv env
./.env\Scripts\activate
```


### Dépendances
```sh
pip install -r requirements.txt
```

### Démarrer le serveur
```sh
python manage.py runserver
```


# Database

'NAME': 'rh',  
'USER': 'postgres',  
'PASSWORD': 'admin',  
'HOST': '127.0.0.1',  
'PORT': '5432',

### Démarrer le serveur
```sh
python manage.py createsuperuser
```


# Utilisation

## Tests

### Unitest (TestCode) :

Un package django spécialisé dans les tests unitaires, installé avec Django
- Répertoire : `app/tests.py`
- test : `py manage.py test`

### Pytest :

Un package python servant à faire des test
- Répertoire : `app/test_pytest.py`
- test : `pytest app/test_pytest.py`

### Pytest-django :

Un package permettant d'intégrer pytest à django
- Répertoire : `app/test_pytest.py`
- test : `pytest`

# FAQ

## Qu'est ce qu'un test unitaire ?

Un test unitaire est une méthode permettant de vérifier le bon fonctionnement d'une unité de code isolée (le plus souvent une fonction ou une méthode). L'objectif est de s'assurer que chaque partie du système fonctionne correctement de manière indépendante. L'objectif principal des tests unitaires est de détecter rapidement les erreurs et les défauts dans le code.

## Comment isoler ses tests ?

Pour isoler les tests unitaires, il est essentiel de garantir que chaque test s'exécute de manière indépendante des autres tests et des dépendances externes. Voici quelques stratégies pour isoler les tests :

- Utilisation de mocks : Les mocks sont des objets simulés qui remplacent les dépendances externes d'une unité de code. Ils permettent de contrôler les entrées et les sorties d'une unité de code pendant les tests afin de l'isoler. Les autres parties étant testés séparément.

- `(A voir)` Utilisation de stubs : Les stubs sont des objets qui fournissent des réponses pré-définies aux appels de méthodes, souvent utilisés pour simuler des comportements spécifiques des dépendances.

- `(A voir)` Utilisation de fakes : Les fakes sont des implémentations simplifiées des dépendances réelles, généralement utilisées pour remplacer les composants coûteux ou difficiles à configurer lors des tests.

- `(A voir)` Utilisation de doubles : Les doubles sont des objets qui implémentent les interfaces des dépendances réelles, mais de manière simplifiée, afin de faciliter les tests.

## Quoi tester ?

Dans un code et un framework, plusieurs éléments peuvent être testables :

- Fonctions et méthodes : Les fonctions et les méthodes sont les unités de code les plus couramment testées. Leurs entrées et sorties peuvent être vérifiées pour s'assurer qu'elles produisent les résultats attendus.

- Classes et objets : Les classes et les objets peuvent également être testés pour s'assurer qu'ils fonctionnent correctement et qu'ils interagissent correctement avec d'autres parties du code.

- `(A voir)` Composants et modules : Les composants et les modules peuvent être testés pour vérifier leur fonctionnement individuel et leur intégration avec d'autres parties du système.

## Comment réaliser des Mock ?

En Python, on peut utiliser le module unittest.mock intégré à la bibliothèque standard pour créer des mocks. Ce module fournit plusieurs classes et fonctions qui facilitent la création et la gestion de mocks : 

### Création de mocks :

- `Mock()` : Cette fonction crée un objet mock de base.
- `MagicMock()` : Cette fonction crée un mock qui permet d'accéder aux attributs et aux méthodes de manière dynamique.
- `patch()` : Cette fonction est utilisée comme décorateur ou gestionnaire de contexte pour remplacer une classe ou une fonction par un mock.


### Configuration de comportements de mocks :

- `return_value` : Attribut d'un mock pour définir la valeur de retour lors d'un appel de méthode.
- `side_effect` : Attribut d'un mock pour spécifier une fonction ou une exception à déclencher lors d'un appel de méthode.
- `assert_called_with()` : Méthode d'un mock pour vérifier les arguments avec lesquels une méthode a été appelée.