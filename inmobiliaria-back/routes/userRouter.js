const express = require("express");
const router = express.Router();
const { listUser, login, register } = require("../controllers/userController");
const { runValidation } = require("../validators/index");

const {
  userValidator,
  loginValidator,
} = require("../validators/userValidator.js");

const { verifyToken } = require("../validators/auth");
const { verifyPerfil } = require("../validators/perfil");



router.get("/user/list",  listUser);

router.post("/user/login",  loginValidator, runValidation, login);

router.post("/user/register", verifyToken, verifyPerfil, userValidator, runValidation, register);

module.exports = router;


