const express= require("express");
const controller=require("../controller/controll.cliente.js")

const routes = express.Router();


// put edita datos
// post el set
routes.get("/clientes", controller.listcliente);


module.exports = routes;