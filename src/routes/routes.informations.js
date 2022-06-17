const express= require("express");
const controller=require("../controller/controll.informations.js")

const routes = express.Router();


// put edita datos
// post el set
routes.get("/informations",controller.renderinformations);


module.exports = routes;
