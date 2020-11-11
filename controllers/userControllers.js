const userMiddleware = require("../middleware/user");
let { check, validationResult, body } = require("express-validator");

const userControllers = {
  storeUser: (req, res) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      userMiddleware.storeUser(req.body);
      res.send("register success");
    } else {
      console.log(errors);
      return res.render("user/register", { errors: errors.errors });
    }
  },
  login: (req, res) => {
    res.send("login :)");
  },

  administracion: (req,res) =>{
    res.render("../views/admin/administracion.ejs")},

  carroDecompras:(req,res)=>{

    res.render("../views/cart/cart.ejs")
  }



};



module.exports = userControllers;
