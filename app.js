require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();
const productsRoutes = require("./src/domain/products/routes");
const usersRoutes = require("./src/domain/users/routes");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.use("/products", productsRoutes);
app.use("/users", usersRoutes);
app.listen(8020, () => {
  console.log("App is listening in port 8020");
});
