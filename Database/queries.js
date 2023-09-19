exports.queryList = {
  GET_STORE_LIST_QUERY: 'SELECT name, code, address FROM "book-store".store',
  ADD_STORE_QUERY:
    'INSERT INTO "book-store".store (name, code, address) VALUES ($1,$2,$3)',
  GET_BOOK_LIST_QUERY:
    'SELECT id, title, isbn, publisher, author FROM "book-store".book',
  GET_BOOK_DETAILS_QUERY:
    'SELECT * FROM "book-store".book INNER JOIN "book-store".store ON store_code = code WHERE book.id = $1',
  ADD_BOOK_QUERY:
    'INSERT INTO "book-store".book (title, isbn, description, publisher, author, pages, store_code) VALUES($1,$2,$3,$4,$5,$6,$7)',
};
