# ludotheque
 Apprendre à faire des tests unitaires
 
## Env

`python -m virtualenv .env`
ou
`py -m venv .env`

## Activier l'environnement

`.\.env\Scripts\activate`

## Install packages

`pip install -r requirements.txt`

## Faire une migration de la bdd

`py manage.py migrate`

## Démarrer le serveur

`python manage.py runserver`

# Database

'NAME': 'rh',  
'USER': 'postgres',  
'PASSWORD': 'admin',  
'HOST': '127.0.0.1',  
'PORT': '5432',

## Ajouter un superuser

`python manage.py createsuperuser`

# Utilisation

## Url
- API (GET) : `localhost/game/` permet de créer ou d'accéder à tout les jeux

## Tests

### Unitest (TestCode) :
Répertoire : app/tests.py
- Unitest nativement intégré à django : `py manage.py test`

### Pytest :

Un package python servant à faire des test
Répertoire : app/test_pytest.py
- pytest : `pytest app/test_pytest.py`

### Pytest-django :

Un package permettant d'intégrer nativement pytest à django
Répertoire : app/test_pytest.py
- pytest-django : `pytest`