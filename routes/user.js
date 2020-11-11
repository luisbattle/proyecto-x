var express = require("express");
var router = express.Router();
const userControllers = require("../controllers/userControllers");
let { check, validationResult, body } = require("express-validator");

/* USER LOGIN. */
router.get("/login", function (req, res, next) {
  res.render("user/login");
});
// post login
router.post("/login", userControllers.login);

// USER REGISTER FORM
router.get("/register", function (req, res, next) {
  res.render("user/register");
});
// STORE USER REGISTRATION
router.post(
  "/register",
  [
    check("email").isEmail().withMessage("Email inválido"),
    check("password")
      .isLength({ min: 5 })
      .withMessage("La contraseña debe tener al menos 5 caracteres"),
  ],
  userControllers.storeUser
);

//ruta para administracion

router.get("/administracion",userControllers.administracion);

//ruta para carro de compras

router.get("/cart",userControllers.carroDecompras);

module.exports = router;
