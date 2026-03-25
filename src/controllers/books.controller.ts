import type { Request, Response } from 'express';
import initialBooks from '../data/books.json' with { type: 'json' };
import type { Book } from '../models/book.model.js';

const books: Book[] = [...initialBooks];

export const getAllBooks = (_req: Request, res: Response) => {
  res.status(200).json(books);
};

export const getBookById = (req: Request, res: Response) => {
  const { id } = req.params;
  const book = books.find((b) => b.id === id);

  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }

  res.status(200).json(book);
};

export const createBook = (req: Request, res: Response) => {
  const { title, author, publishedYear } = req.body;

  if (!title || !author || !publishedYear) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const newBook: Book = {
    id: (books.length + 1).toString(),
    title,
    author,
    publishedYear,
  };

  books.push(newBook);
  res.status(201).json(newBook);
};

export const updateBook = (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, author, publishedYear } = req.body;

  const bookIndex = books.findIndex((b) => b.id === id);

  if (bookIndex === -1) {
    return res.status(404).json({ message: 'Book not found' });
  }

  books[bookIndex] = {
    ...books[bookIndex],
    title: title || books[bookIndex].title,
    author: author || books[bookIndex].author,
    publishedYear: publishedYear || books[bookIndex].publishedYear,
  };

  res.status(200).json(books[bookIndex]);
};

export const deleteBook = (req: Request, res: Response) => {
  const { id } = req.params;
  const bookIndex = books.findIndex((b) => b.id === id);

  if (bookIndex === -1) {
    return res.status(404).json({ message: 'Book not found' });
  }

  const deletedBook = books.splice(bookIndex, 1);
  res.status(200).json({ message: 'Book deleted', book: deletedBook[0] });
};
