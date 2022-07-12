const express= require("express");
const controller=require("../controller/controll.managadmin.js")

const routes = express.Router();


// put edita datos
// post el set
//routes.get("/managadmin",controller.renderselect);
routes.get("/managadmin",controller.renderinventario);
routes.post("/registrarProducto",controller.registrarProducto);
routes.post("/eliminarProducto",controller.eliminarProducto);
// VAlidar Administrador
function administrador($usuario, $contraseña){}


module.exports = routes;
