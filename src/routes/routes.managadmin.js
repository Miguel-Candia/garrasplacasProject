const express= require("express");
const controller=require("../controller/controll.managadmin.js")

const routes = express.Router();


/**
 * @module routesmanagadmin
 * @description Metodos get y post de view managadmin
 */

/**
 * @function get/managadmin 
 * @description Funcion que renderiza al controller renderinventario
 */

routes.get("/managadmin",controller.renderinventario);

/**
 * @function post/registrarProducto 
 * @description Funcion que renderiza al controller registrarProducto
 */
routes.post("/registrarProducto",controller.registrarProducto);

/**
 * @function post/eliminarProducto 
 * @description Funcion que renderiza al controller eliminarProducto
 */
routes.post("/eliminarProducto",controller.eliminarProducto);



module.exports = routes;
