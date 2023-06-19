# FROM python:3.11 utilise l'image Python 3.11 slim comme base.
# ENV définit des variables d'environnement pour ne pas écrire de fichiers bytecode et pour exécuter Python en mode non bufferisé.
# WORKDIR définit le répertoire de travail dans le conteneur.
# COPY copie le fichier requirements.txt dans le conteneur.
# RUN installe les dépendances Python à partir de requirements.txt.
# Le dernier COPY copie le reste du code de l'application dans le conteneur.

FROM python:3.11

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /

COPY requirements.txt /
RUN pip install --no-cache-dir -r requirements.txt

COPY . /