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

`python manage.py admin_superuser --username=admin --email=admin@admin.com`

# Utilisation

Il n'y a pas de page d'accueil à l'application. Il est seulement possible de se connecter à l'application et de gérer les employés.
Si l'on se connecte avec postman, il ne faut pas oublier d'ajouter l'access token dans Bearer

## Connexion

- Prod POST: `http://projets.fredy-mc.fr/rh-solution-backend/api/session/login`
- Dev : `http://localhost:8000/api/session/login`

## Employés - Prod

- GET : `http://projets.fredy-mc.fr/rh-solution-backend/api/app/employees`
- POST : `http://projets.fredy-mc.fr/rh-solution-backend/api/app/employees`

- GET : `http://projets.fredy-mc.fr/rh-solution-backend/api/app/employees/<id>`
- PUT : `http://projets.fredy-mc.fr/rh-solution-backend/api/app/employees/<id>`
- PATCH : `http://projets.fredy-mc.fr/rh-solution-backend/api/app/employees/<id>`
- DELETE : `http://projets.fredy-mc.fr/rh-solution-backend/api/app/employees/<id>`
