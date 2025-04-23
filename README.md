# Todo App — Test Technique

## 📌 Objectif

Application de gestion de tâches réalisée en React (frontend) et NestJS (backend), avec une base de données MySQL. Ce projet a été réalisé dans le cadre d’un test technique.

---

## ⚙️ Technologies utilisées

- **Frontend** : React 
- **Backend** : NestJS + Prisma
- **Base de données** : MySQL via XAMPP
- **ORM** : Prisma
- **Styling** : Tailwind CSS
- **Package manager** : Yarn

---

## 🚀 Installation & Démarrage

### 1. Lancer la base MySQL
Ayant XAMPP en local, j'ai activé et modifier le fichier .env
```
### 2. Back End

```bash
cd backend
yarn install
# Créer la base selon le .env
yarn prisma migrate dev
yarn start:dev
``` 

### 3. Front End

```bash
cd frontend
yarn install
yarn dev
``` 

## ✅ Fonctionnalités

Backend (NestJS)
✅ Récupération des tâches (déjà implémenté)

✅ Création de tâche (POST /tasks) : Ajout d'un dto dans le controller, insertion avec prisma dans repository

✅ Modification de tâche (PATCH /tasks/:id) : Pareil que la création 

✅ Suppression de tâche (DELETE /tasks/:id – déjà existante)

Frontend (React)
✅ Affichage de la liste des tâches

✅ Création de tâche via un formulaire

✅ Édition d’une tâche en cliqquant sur le IconButton success 

✅ Suppression de tâche en cliquant sur le IconButton delete

✨ Bonus : Effectuer une recherche de tache en fonction des caractère du nom


## 🧠 Choix techniques & décisions
Yarn a été utilisé à la place de npm comme demandé.

Prisma facilite la gestion de la base de données et les migrations.

NestJS pour une architecture backend solide et modulaire.

React pour un frontend rapide et fluide.

XAMPP pour MySQL : configuration rapide et present en local.

## 🧩 Difficultés rencontrées


Problème de connexion à la base au début → réglé en ajustant .env

Quelques ajustements nécessaires dans le typage des DTO côté NestJS

Gestion des états dans le frontend un peu tricky avec l’édition en ligne

## 📹 Démonstration
👉 Vidéo de démonstration ici : (https://drive.google.com/file/d/1OUJ7Ngx3zgChssA58uuzUG8ZL_8orGp-/view?usp=sharing)

## 📂 Repos GitHub
Frontend(https://github.com/Gbane26/frontend)

Backend(https://github.com/Gbane26/backend)

## 🙏 Remerciements
Merci pour ce test enrichissant qui m’a permis de combiner développement frontend & backend avec une stack moderne.

