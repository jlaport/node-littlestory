const express = require("express");
const router = express.Router();
const UserController = require("./controller");


router.get("/", UserController.getUsers);
router.post("/", UserController.post);
router.post("/auth", UserController.auth);

module.exports = router;
