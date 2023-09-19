exports.Book = class Book {
  constructor(
    id,
    title,
    isbn,
    description,
    publisher,
    author,
    pages,
    store_code
  ) {
    this.id = id;
    this.title = title;
    this.isbn = isbn;
    this.description = description;
    this.publisher = publisher;
    this.author = author;
    this.pages = pages;
    this.store_code = store_code;
  }
};
