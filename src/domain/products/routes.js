const express = require("express");
const router = express.Router();
//const db = require("../../db");
//const { request, response } = require("express");
const ProductsController = require("./controller");

router.get("/", ProductsController.getProducts);

module.exports = router;
