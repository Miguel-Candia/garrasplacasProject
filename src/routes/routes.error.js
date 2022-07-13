const express= require("express");
const controller=require("../controller/controll.error.js")

const routes = express.Router();


/**
 * @module routeserror
 * @description Metodos get y post de view error
 */

/**
 * @function get/error 
 * @description Funcion que renderiza al controller rendererror
 */
routes.get("/error",controller.rendererror);


module.exports = routes;
