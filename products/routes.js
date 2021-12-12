const express = require("express");
const router = express.Router();
const ProductController = require("./controller");
const db = require("../db");
const { request, response } = require("express");

router.get("/", async (request, response) => {
  const res = await db.query("SELECT * FROM products");
  response.send(res.rows);
});

module.exports = router;
