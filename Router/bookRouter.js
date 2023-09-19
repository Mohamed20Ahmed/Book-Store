const express = require("express");
const router = express.Router();
const bookController = require("../Controller/bookController");

router.get("/books", bookController.getBookList);
router.get("/book/:id", bookController.getBookDetails);
router.post("/addBook", bookController.addBook);

module.exports = router;
