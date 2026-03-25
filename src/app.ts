import cors from 'cors';
import type { Application, NextFunction, Request, Response } from 'express';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import bookRoutes from './routes/books.routes.js';
import healthRoutes from './routes/health.js';

const app: Application = express();

// Middleware
app.use(helmet());
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// Routes
app.use('/health', healthRoutes);
app.use('/api/books', bookRoutes);

// Error handling
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({
    message: 'Internal Server Error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined,
  });
});

export default app;
