const express= require("express");
const controller=require("../controller/controll.cliente.js")

const routes = express.Router();

/**
 * @module routescliente
 * @description Metodos get y post de view cliente
 */


/**
 * @function get/clientes 
 * @description Funcion que renderiza al controller listcliente
 */
routes.get("/clientes", controller.listcliente);


module.exports = routes;