# KNB Core

Kourosh New Global Bank — Phase 0 sandbox foundation.

> This software is **not a bank**, does not hold real money, and does not perform real fiat or blockchain settlement. All balances and transactions are local sandbox data.

## Run

Requirements: Docker Desktop and Docker Compose.

```bash
git clone https://github.com/zenopro1346-code/knb-core.git
cd knb-core
cp .env.example .env
docker compose up --build
```

- API: http://localhost:3001
- API health: http://localhost:3001/health
- Web: http://localhost:3000
- PostgreSQL: localhost:5432
- Redis: localhost:6379
- Keycloak: http://localhost:8080

The API creates six sandbox assets on startup and exposes a minimal double-entry ledger. Each transaction must have at least two entries and must balance separately for every asset. Amounts are integer minor units; no JavaScript floating-point money calculations are used.

## API example

```bash
curl http://localhost:3001/assets
curl -X POST http://localhost:3001/accounts \
  -H 'content-type: application/json' \
  -d '{"ownerId":"user-123","asset":"EUR"}'
```

For a complete transaction, use account IDs returned by `/accounts` and amounts such as `10000` for `100.00 EUR`.

## Current scope

Implemented: Docker development environment, PostgreSQL schema, Redis health check, API health/assets/accounts/ledger endpoints, atomic posting, per-asset balancing, idempotency, and a minimal web status page.

Not implemented yet: real banking, KYC/AML, cards, blockchain settlement, production deployment, and real-money providers.
