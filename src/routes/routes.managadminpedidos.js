const express= require("express");
const controller=require("../controller/controll.managadminpedidos.js")

const routes = express.Router();


// put edita datos
// post el set
routes.get("/managadminpedidos",controller.renderpedidos);
//routes.get("/userform",controller.renderregion);

// Mostrar en html los datos del cliente en la tabla
function getcliente(){}


module.exports = routes;
