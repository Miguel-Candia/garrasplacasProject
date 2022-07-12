const express= require("express");
const controller=require("../controller/controll.loginadmin.js")

const routes = express.Router();


// put edita datos
// post el set
routes.get("/loginadmin",controller.renderloginadmin);
routes.post("/validarlogin", controller.validarlogin);

module.exports = routes;
