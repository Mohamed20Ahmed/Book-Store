const queries = require("../Database/queries");
const dbConnection = require("../Database/connection");
const Book = require("../Model/bookModel").Book;

exports.getBookList = async (req, res) => {
  try {
    let bookListQuery = queries.queryList.GET_BOOK_LIST_QUERY;
    let result = await dbConnection.dbQuery(bookListQuery);
    return res.status(200).send(result.rows);
  } catch (err) {
    console.log(err);
    return res.status(500).send({ error: "Error getting book list" });
  }
};

exports.getBookDetails = async (req, res) => {
  try {
    let bookId = req.params.id;
    let bookDetailsQuery = queries.queryList.GET_BOOK_DETAILS_QUERY;
    let result = await dbConnection.dbQuery(bookDetailsQuery, [bookId]);
    return res.status(200).send(result.rows);
  } catch (err) {
    console.log(err);
    return res.status(500).send({ error: "Error getting book details" });
  }
};

exports.addBook = async (req, res) => {
  try {
    let book = new Book(
      "",
      req.body.title,
      req.body.isbn,
      req.body.description,
      req.body.publisher,
      req.body.author,
      req.body.pages,
      req.body.store_code
    );

    if (
      !book.title ||
      !book.isbn ||
      !book.description ||
      !book.publisher ||
      !book.author ||
      !book.pages ||
      !book.store_code
    ) {
      return res.status(404).send({ error: "Please enter all fields" });
    }
    let addBookQuery = queries.queryList.ADD_BOOK_QUERY;
    await dbConnection.dbQuery(addBookQuery, [
      book.title,
      book.isbn,
      book.description,
      book.publisher,
      book.author,
      book.pages,
      book.store_code,
    ]);
    res.status(200).send("Book added successfully");
  } catch (err) {
    console.log(err);
    return res.status(500).send({ error: "Error adding book" });
  }
};

exports.updateBook = async (req, res) => {
  try {
    let book = new Book(
      req.body.id,
      req.body.title,
      req.body.isbn,
      req.body.description,
      req.body.publisher,
      req.body.author,
      req.body.pages,
      req.body.store_code
    );

    if (
      !book.id ||
      !book.title ||
      !book.isbn ||
      !book.description ||
      !book.publisher ||
      !book.author ||
      !book.pages ||
      !book.store_code
    ) {
      return res.status(404).send({ error: "Please enter all fields" });
    }
    let updateBookQuery = queries.queryList.UPDATE_BOOK_QUERY;
    await dbConnection.dbQuery(updateBookQuery, [
      book.title,
      book.isbn,
      book.description,
      book.publisher,
      book.author,
      book.pages,
      book.store_code,
      book.id,
    ]);
    res.status(200).send("Book updated successfully");
  } catch (err) {
    console.log(err);
    return res.status(500).send({ error: "Error updating book" });
  }
};
