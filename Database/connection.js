const pool = require("./pool");

exports.query = (queryText, queryParams) => {
  return new Promise((resolve, reject) => {
    query(queryText, queryParams)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
