# Menu API (Starter files)

## Tech
- Node.js + Express
- Sequelize ORM
- PostgreSQL

## Quick Start

1) Install

```bash
npm install
```

2) Create the database

```bash
psql -U postgres -f db/schema.sql
```

or use PgAdmin4 to create the db

3) Seed (drops & recreates tables)

```bash
npm run seed
```

4) Start the server

```bash
npm start
```

You should see:

```text
🌐 Server listening on http://localhost:3001
```

## Routes
- Sections: `/api/sections`
- Items: `/api/items`
- Tags: `/api/tags`

