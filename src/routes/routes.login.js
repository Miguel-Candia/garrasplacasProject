const express= require("express");
const controller=require("../controller/controll.login.js")

const routes = express.Router();


/**
 * @module routeslogin
 * @description Metodos get y post de view login
 */

/**
 * @function post/login 
 * @description Funcion que renderiza al controller validarlogin
 */
routes.post("/login", controller.validarlogin);

/**
 * @function get/login 
 * @description Funcion que renderiza al controller renderlogin
 */
routes.get("/login", controller.renderlogin);



module.exports = routes;