Réponds en francais 

Tu es un senior frontend + devops. Tu dois refactorer et professionnaliser mon repo “portfolio”.
Stack: React + Tailwind CSS. Objectif: repo propre, facile à lancer en local et en test via Docker, avec une documentation claire.

CONTRAINTES
- Ne change pas la stack (React + Tailwind).
- Ne casse pas le rendu (garde le design global).
- Priorité: propreté, structure, DX (developer experience), scripts, Docker, documentation.
- Ajoute des checks qualité (lint/format) et une base CI GitHub Actions.
- Tout doit être déclenchable facilement: `npm run dev` et `docker compose up`.

CE QUE TU DOIS FAIRE (PLAN D’ACTIONS)
1) Audit du repo
   - Liste les problèmes actuels: structure, conventions, scripts, dépendances, build, assets, etc.
   - Propose une structure cible, puis applique-la.

2) Structure “pro”
   - Réorganise les dossiers (ex: src/components, src/pages, src/sections, src/assets, src/hooks, src/lib, src/styles).
   - Mets en place des conventions de nommage.
   - Ajoute des alias d’import (ex: @/components) si possible.

3) Config projet
   - Ajoute/standardise: ESLint + Prettier (et config Tailwind si nécessaire).
   - Ajoute des scripts npm utiles:
     - dev, build, preview/start, lint, format, test (si tu ajoutes un test minimal), typecheck (si TS sinon ignore)
   - Optionnel si vite: `npm run preview` pour servir le build.

4) Dockerisation “test facile”
   - Ajoute un Dockerfile multi-stage:
     - Stage 1: build
     - Stage 2: servir le build avec nginx (recommandé) OU node (si plus simple).
   - Ajoute docker-compose.yml avec:
     - un service `portfolio` exposant le port 8080 (ou 3000).
     - variables d’environnement si besoin.
   - Ajoute aussi un mode dev optionnel (volume + hot reload) si simple.

5) Documentation
   - Réécris un README.md “pro” incluant:
     - Prérequis
     - Lancement local (npm install / npm run dev)
     - Lancement via Docker (docker compose up --build)
     - Commandes utiles (lint/format/build)
     - Structure du repo (explication courte des dossiers)
     - Dépannage (ports, node version, cache, etc.)
   - Ajoute un fichier `.env.example` si variables.
   - Ajoute un `Makefile` optionnel avec:
     - make dev
     - make docker-up
     - make docker-build
     - make lint
     - make format

6) CI GitHub Actions (simple)
   - Ajoute workflow `.github/workflows/ci.yml`:
     - install deps
     - lint
     - build
   - Node version fixée (ex: 20 LTS), cache npm.

7) Output attendu
   - Fais les modifications directement dans le repo.
   - Donne un résumé clair:
     - ce qui a changé
     - nouveaux scripts
     - comment lancer en local et docker
   - Fournis tous les fichiers ajoutés/modifiés (contenu complet).

IMPORTANT
- Si le projet est en CRA, garde CRA. Si c’est Vite, garde Vite.
- N’introduis pas de dépendances lourdes inutiles.
- Si tu dois choisir: privilégie la simplicité et la maintenabilité.
- Assure-toi que `docker compose up --build` fonctionne sans étape manuelle.
- Vérifie que le build fonctionne avant de finaliser.

