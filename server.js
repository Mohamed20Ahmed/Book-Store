const express = require("express");
const app = express();
const cors = require("cors");
const bodyparser = require("body-parser");
const storeRouter = require("./Router/storeRouter");
const dotenv = require("dotenv");

dotenv.config();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use(cors());

app.use("/book-store", storeRouter);

app.listen(process.env.PORT, () => {
  console.log("listening on port " + process.env.PORT);
});
