const express= require("express");
const controller=require("../controller/controll.informations.js")

const routes = express.Router();

/**
 * @module routesinformations
 * @description Metodos get y post de view informations
 */


/**
 * @function get/informations 
 * @description Funcion que renderiza al controller renderinformations
 */
routes.get("/informations",controller.renderinformations);


module.exports = routes;
