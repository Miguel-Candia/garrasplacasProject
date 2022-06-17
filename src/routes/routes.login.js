const express= require("express");
const controller=require("../controller/controll.login.js")

const routes = express.Router();


// put edita datos
// post el set
routes.post("/login", controller.validarlogin);
routes.get("/login", controller.renderlogin);



module.exports = routes;