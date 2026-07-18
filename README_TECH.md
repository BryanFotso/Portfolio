# Portfolio - Chris Bryan Fotso Tala

Portfolio professionnel React construit avec Vite et Tailwind CSS, structuré pour un démarrage local rapide et une exécution Docker simple.

## Prérequis

- Node.js 20.19+ (ou 22.12+)
- npm 10+
- Docker + Docker Compose (optionnel, pour le run container)

## Lancement local

```bash
npm ci
npm run dev
```

L'application est disponible sur `http://localhost:5173`.

## Lancement via Docker

```bash
docker compose up --build
```

L'application est disponible sur `http://localhost:8080`.

## Commandes utiles

```bash
npm run dev
npm run build
npm run preview
npm run lint
npm run format
npm run test
npm run test:watch
```

## Structure du repo

```
.
├── docker/                 # Config Nginx pour le build
├── public/                 # Assets statiques copiés tels quels
├── src/
│   ├── components/         # Composants réutilisables (layout)
│   ├── sections/           # Sections de page (Hero, About, etc.)
│   └── styles/             # Styles globaux
├── .github/workflows/      # CI GitHub Actions
├── index.html              # Point d'entrée Vite
├── vite.config.js          # Vite, alias et Vitest
└── docker-compose.yml      # Build et exécution de l'image de production
```

Les alias d'import sont configurés dans `vite.config.js` et documentés dans `jsconfig.json` (`components/...`, `sections/...`, etc.).

## Variables d’environnement

Copie `.env.example` vers `.env` si besoin. Les variables exposées au navigateur doivent utiliser le préfixe `VITE_`. `VITE_BASE_PATH` permet de remplacer le chemin public utilisé au build.

## Dépannage

- **Port déjà utilisé**: change le port dans `docker-compose.yml` ou libère 8080/5173.
- **Version Node**: utilise Node 20.19+ ou 22.12+ pour respecter les prérequis de Vite.
- **Cache npm**: en cas d'erreur, supprime `node_modules` et relance `npm ci`.
