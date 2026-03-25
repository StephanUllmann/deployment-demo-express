# Design: TypeScript Express Books API

## Architecture
This project will follow a simple, flat structure for minor features, but with clear separation of concerns to allow for future scalability:

- `src/`: Root of the TypeScript source code.
- `src/routes/`: Express endpoint definitions.
- `src/controllers/`: Business logic corresponding to routes.
- `src/models/`: TypeScript interfaces and Joi validation (if applicable).
- `src/data/`: JSON mockup storage.

## Key Technologies
- **TypeScript**: Typed JavaScript for better developer experience and reliability.
- **Express**: Fast, unopinionated, minimalist web framework.
- **Nodemon / ts-node**: Development tools for real-time changes.
- **Morgan**: HTTP request logging.
- **Cors**: Cross-Origin Resource Sharing support.

## Data Model
Each book will consist of:
- `id` (string): Unique identifier.
- `title` (string): The book's name.
- `author` (string): The author's name.
- `publishedYear` (number): The year the book was released.

## Security & Reliability
- **Environment Management**: Use `dotenv` for configuration.
- **Error Handling**: Centralized error middleware for consistent response formatting.
- **Validation**: Basic ID validation to prevent invalid lookups.

## External Dependencies
- `express`
- `cors`
- `helmet`
- `morgan`
- `dotenv`
- `typescript`
- `ts-node`
- `nodemon`
- `@types/express`
- `@types/cors`
- `@types/morgan`
- `@types/node`
