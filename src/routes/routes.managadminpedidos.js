const express= require("express");
const controller=require("../controller/controll.managadminpedidos.js")

const routes = express.Router();

/**
 * @module routesmanagadminpedidos
 * @description Metodos get y post de view managadminpedidos
 */

/**
 * @function get/managadminpedidos 
 * @description Funcion que renderiza al controller renderpedidos
 */

routes.get("/managadminpedidos",controller.renderpedidos);



module.exports = routes;
