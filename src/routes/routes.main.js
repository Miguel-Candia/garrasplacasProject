const express= require("express");
const controller=require("../controller/controll.main.js")

const routes = express.Router();


// put edita datos
// post el set
routes.get("/main",controller.rendermain);


module.exports = routes;
