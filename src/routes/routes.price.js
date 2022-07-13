const express= require("express");
const controller=require("../controller/controll.price.js")

const routes = express.Router();

/**
 * @module routesPrice
 * @description Metodos get y post de view price
 */

/**
 * @function get/price 
 * @description Funcion que renderiza al controller renderprice
 */

routes.get("/price",controller.renderprice);


module.exports = routes;
