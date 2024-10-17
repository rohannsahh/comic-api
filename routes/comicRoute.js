import express from "express";

import { createComicBook,getComics,getComicById,updateComicBook,deleteComicBook } from '../controllers/comicController.js';

export const router = express.Router();

// Create a new comic book
router.post('/', createComicBook);

// Get all comics 
router.get('/', getComics);

// Get a specific comic book by ID
router.get('/:id', getComicById);

// Update a comic book by ID
router.put('/:id', updateComicBook);

// Delete a comic book by ID
router.delete('/:id', deleteComicBook);

