const express= require("express");
const controller=require("../controller/controll.about.js")

const routes = express.Router();

/**
 * @module routesabout
 * @description Metodos get y post de view about
 */

/**
 * @function get/about 
 * @description Funcion que renderiza al controller renderabout
 */
routes.get("/about",controller.renderabout);


module.exports = routes;
