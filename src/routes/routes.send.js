const express= require("express");
const controller=require("../controller/controll.send.js")

const routes = express.Router();

/**
 * @module routesSend
 * @description Metodos get y post de view send
 */

/**
 * @function get/send 
 * @description Funcion que renderiza al controller rendersend
 */

routes.get("/send",controller.rendersend);


module.exports = routes;
