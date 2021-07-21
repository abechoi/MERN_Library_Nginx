const express = require("express");
const {
  createBook,
  getBooks,
  updateBook,
  deleteBook,
  getPublishedBooks,
} = require("../controllers/bookControllers");

const router = express.Router();

router.route("/books").get(getBooks).post(createBook);
router.route("/books/:id").get(getBook).patch(updateBook).delete(deleteBook);
router.route("/books/published").get(getPublishedBooks);

module.exports = router;
