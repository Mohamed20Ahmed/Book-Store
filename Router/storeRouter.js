const express = require("express");
const router = express.Router();
const storeController = require("../Controller/storeController");

router.get("/stores", storeController.getStoreList);
router.post("/addStore", storeController.addStore);

module.exports = router;
