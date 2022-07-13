const express= require("express");
const controller=require("../controller/controll.loginadmin.js")

const routes = express.Router();

/**
 * @module routesloginadmin
 * @description Metodos get y post de view loginadmin
 */

/**
 * @function get/loginadmin 
 * @description Funcion que renderiza al controller renderloginadmin
 */
routes.get("/loginadmin",controller.renderloginadmin);

/**
 * @function post/validarlogin 
 * @description Funcion que renderiza al controller validarlogin
 */
routes.post("/validarlogin", controller.validarlogin);

module.exports = routes;
