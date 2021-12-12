require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const productsRoutes = require("./products/routes");
const usersRoutes = require("./users/routes");

const cors = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors);

app.use("/products", productsRoutes);
app.use("/users", usersRoutes);
app.listen(8020, () => {
  console.log("App is listening in port 8020");
});
