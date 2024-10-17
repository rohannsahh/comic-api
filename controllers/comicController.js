import { comicBook } from '../models/comicBookModel.js';

export const createComicBook = async (req, res) => {
  try {
    const comic = await comicBook.create(req.body);
    res.status(201).json(comic);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all comic books 
export const getComics = async (req, res) => {
  const { page = 1, limit = 10, sortBy = 'bookName', order = 'asc', ...filters } = req.query;
  
  try {
    const comics = await ComicBook.find(filters)
      .sort({ [sortBy]: order === 'asc' ? 1 : -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const totalComics = await comicBook.countDocuments(filters);

    res.status(200).json({
      comics,
      totalComics,
      totalPages: Math.ceil(totalComics / limit),
      currentPage: Number(page),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single comic book by ID
export const getComicById = async (req, res) => {
  try {
    const comic = await comicBook.findById(req.params.id);
    if (!comic) {
      return res.status(404).json({ message: 'Comic not found' });
    }
    res.status(200).json(comic);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a comic book by ID
export const updateComicBook = async (req, res) => {
  try {
    const comic = await comicBook.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!comic) {
      return res.status(404).json({ message: 'Comic not found' });
    }
    res.status(200).json(comic);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a comic book by ID
export const deleteComicBook = async (req, res) => {
  try {
    const comic = await comicBook.findByIdAndDelete(req.params.id);
    if (!comic) {
      return res.status(404).json({ message: 'Comic not found' });
    }
    res.status(200).json({ message: 'Comic deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


