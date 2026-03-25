# Tasks: TypeScript Express Books API

## Phase 1: Initial Setup
- [ ] Initialize Node.js project (`npm init -y`)
- [ ] Install dependencies (`express`, `cors`, `helmet`, `morgan`, `dotenv`)
- [ ] Install development dependencies (`typescript`, `ts-node`, `nodemon`, `@types/express`, `@types/cors`, `@types/morgan`, `@types/node`)
- [ ] Configure `tsconfig.json` for Node.js and TypeScript project requirements.
- [ ] Update `package.json` with scripts for `build`, `start`, and `dev` (using nodemon).
- [ ] Create basic project structure: `src/`, `src/routes/`, `src/controllers/`, `src/models/`, `src/data/`, `src/middleware/`.

## Phase 2: Implementation
- [ ] Create `server.ts` to boot the Express application.
- [ ] Setup `src/app.ts` with middleware (helmet, morgan, cors, and error handling).
- [ ] Create a `health` endpoint at `GET /health` in `src/routes/health.ts`.
- [ ] Implement `src/models/book.model.ts` for the `Book` interface.
- [ ] Create a mockup `books.json` in `src/data/books.json` with initial data.
- [ ] Implement CRUD logic in `src/controllers/books.controller.ts`.
- [ ] Create API routes in `src/routes/books.routes.ts` connecting to the books controller.
- [ ] Register all routes in `src/app.ts`.

## Phase 3: Testing & Handover
- [ ] Verify health check at `GET localhost:3000/health`.
- [ ] Test full CRUD functionality (List, Get, Create, Update, Delete) for books.
- [ ] Ensure proper error handling (e.g., 404 for non-existent books).
- [ ] Verify `nodemon` setup for auto-reloading during development.
