const express= require("express");
const controller=require("../controller/controll.userform.js")

const routes = express.Router();


// put edita datos
// post el set
routes.get("/userform",controller.renderregion);
//routes.get("/userform",controller.rendercomuna);


//Guardar los datos del formlario en la base de datos




// Mostrar en userform
function getcollar(){}

function getregion(){}

function getcolor(){}

function gettamano(){}

function getcomuna(){}




module.exports = routes;
