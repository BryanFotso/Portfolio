# Portfolio - Chris Bryan Fotso Tala

Portfolio professionnel React (CRA) avec une base Tailwind prête à l'emploi, structuré pour un démarrage local rapide et une exécution Docker simple.

## Prérequis

- Node.js 20 LTS
- npm 10+
- Docker + Docker Compose (optionnel, pour le run container)

## Lancement local

```bash
npm ci
npm run dev
```

L'application est disponible sur `http://localhost:3000`.

## Lancement via Docker

```bash
docker compose up --build
```

L'application est disponible sur `http://localhost:8080`.

## Commandes utiles

```bash
npm run dev
npm run build
npm run lint
npm run format
npm run test
```

## Structure du repo

```
.
├── docker/                 # Config Nginx pour le build
├── public/                 # Assets statiques
├── src/
│   ├── components/         # Composants réutilisables (layout)
│   ├── sections/           # Sections de page (Hero, About, etc.)
│   └── styles/             # Styles globaux
├── .github/workflows/      # CI GitHub Actions
└── docker-compose.yml      # Build et exécution de l'image de production
```

Alias d'import: baseUrl configuré sur `src` (`components/...`, `sections/...`).

## Variables d’environnement

Copie `.env.example` vers `.env` si besoin. CRA exige le préfixe `REACT_APP_`.

## Dépannage

- **Port déjà utilisé**: change le port dans `docker-compose.yml` ou libère 8080/3000.
- **Version Node**: utilise Node 20 LTS pour éviter des écarts de build.
- **Cache npm**: en cas d'erreur, supprime `node_modules` et relance `npm ci`.
