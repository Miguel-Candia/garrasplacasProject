const express= require("express");
const controller=require("../controller/index.js")

const routes = express.Router();

/**
 * @module routesindex
 * @description Metodos get y post de view index
 */

/**
 * @function get/ 
 * @description Funcion que renderiza al controller demo
 */
routes.get("/",controller.demo);


module.exports = routes;
