const express= require("express");
const controller=require("../controller/controll.transference.js")

const routes = express.Router();

/**
 * @module routesTransference
 * @description Metodos get y post de view transference
 */



/**
 * @function get/transference 
 * @description Funcion que renderiza al controller rendertransference
 */
routes.get("/transference",controller.rendertransference);


module.exports = routes;
