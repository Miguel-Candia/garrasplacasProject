const express= require("express");
const controller=require("../controller/controll.main.js")

const routes = express.Router();

/**
 * @module routesmain
 * @description Metodos get y post de view main
 */

/**
 * @function get/main 
 * @description Funcion que renderiza al controller rendermain
 */
routes.get("/main",controller.rendermain);


module.exports = routes;
