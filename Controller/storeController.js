const queries = require("../Database/queries");
const dbConnection = require("../Database/connection");
const Store = require("../Model/storeModel").Store;
const generateCode = require("../Util/generateCode");

exports.getStoreList = async (req, res) => {
  try {
    let storeListQuery = queries.queryList.GET_STORE_LIST_QUERY;
    let result = await dbConnection.dbQuery(storeListQuery);
    return res.status(200).send(result.rows);
  } catch (err) {
    console.log(err);
    return res.status(500).send({ error: "Error getting store list" });
  }
};

exports.addStore = async (req, res) => {
  try {
    let store = new Store(
      req.body.name,
      generateCode.getStoreCode(),
      req.body.address
    );
    if (!store.name || !store.address) {
      return res.status(404).send({ error: "Please enter all fields" });
    }
    let addStoreQuery = queries.queryList.ADD_STORE_QUERY;
    await dbConnection.dbQuery(addStoreQuery, [
      store.name,
      store.code,
      store.address,
    ]);
    res.status(200).send("Store added successfully");
  } catch (err) {
    console.log(err);
    return res.status(500).send({ error: "Error adding store" });
  }
};
