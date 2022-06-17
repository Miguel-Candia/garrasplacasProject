const express= require("express");
const controller=require("../controller/controll.error.js")

const routes = express.Router();


// put edita datos
// post el set
routes.get("/error",controller.rendererror);


module.exports = routes;
