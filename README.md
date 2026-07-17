# Clay by McCay

A pottery e-commerce storefront for Clay by McCay (Nashville, TN), split into a
Vite + React frontend and a Node/Express backend that will integrate with the
Square API for catalog and checkout.

```
clay-by-mccay/
├── frontend/   Vite + React storefront
└── backend/    Express API (Square integration)
```

## Frontend

```
cd frontend
npm install
npm run dev
```

Product data is currently read from `frontend/src/data/products.json` as a
placeholder until the backend's `/products` route is wired up to Square.

## Backend

```
cd backend
npm install
npm run dev
```

Routes are scaffolded (`/products`, `/checkout`) but not yet implemented —
see `backend/src/services/square.service.js`.

## Environment variables

Copy `.env.example` to `.env` at the repo root and fill in real values. Both
apps read from this single root `.env` (the frontend via `envDir` in
`vite.config.js`, the backend via `src/config/env.js`).
