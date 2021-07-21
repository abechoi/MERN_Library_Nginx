const Book = require("../models/Book");
const AsyncManager = require("../utils/asyncManager");
const LibraryError = require("../utils/libraryError");

// $-title Create a Book
// $-path POST /api/v1/books
// $-auth Public

exports.createBook = AsyncManager(async (req, res, next) => {
  const newBook = await Book.create(req.body);
  return res.status(201).json({ success: true, data: newBook });
});

// $-title Get Books
// $-path GET /api/v1/books
// $-auth Public

exports.getBooks = AsyncManager(async (req, res, next) => {
  const books = await Book.find();
  return res
    .status(200)
    .json({ success: true, total: books.length, data: books });
});

// $-title Get a Book
// $-path GET /api/v1/books/:id
// $-auth Public

exports.getBook = AsyncManager(async (req, res, next) => {
  const id = req.params.id;
  const book = await Book.findById(id);
  if (!book) {
    return next(new LibraryError(`Book:${id} not found.`, 404));
  }
  return res.status(200).json({ success: true, data: book });
});

// $-title Get Published Books
// $-path GET /api/v1/books/published
// $-auth Public

exports.getPublishedBooks = AsyncManager(async (req, res, next) => {
  const books = await Book.find({ published: true });
  return res
    .status(200)
    .json({ success: true, total: books.length, data: books });
});

// $-title Update Book
// $-path PATCH /api/v1/books/:id
// $-auth Public

exports.updateBook = AsyncManager(async (req, res, next) => {
  const id = req.params.id;
  let book = await Book.findById(id);
  if (!book) {
    return next(new LibraryError(`Book:${id} not found.`, 404));
  }

  book = await Book.findOneAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  return res.status(200).json({ success: true, data: book });
});

// $-title Delete Book
// $-path DELETE /api/v1/books/:id
// $-auth Public

exports.deleteBook = AsyncManager(async (req, res, next) => {
  const id = req.params.id;
  const book = await Book.findById(id);

  if (!book) {
    return next(new LibraryError(`Book:${id} not found.`, 404));
  }

  await book.remove();

  return res.status(200).json({ success: true, data: {} });
});
