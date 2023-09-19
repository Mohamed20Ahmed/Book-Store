exports.queryList = {
  GET_STORE_LIST_QUERY: 'SELECT name, code, address FROM "book-store".store',
  ADD_STORE_QUERY:
    'INSERT INTO "book-store".store (name, code, address) VALUES ($1,$2,$3)',
};
