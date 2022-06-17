const express= require("express");
const controller=require("../controller/controll.transference.js")

const routes = express.Router();


// put edita datos
// post el set
routes.get("/transference",controller.rendertransference);


module.exports = routes;
