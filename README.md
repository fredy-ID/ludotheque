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

- API (GET) : `localhost/game/` permet de créer ou d'accéder à tout les jeux