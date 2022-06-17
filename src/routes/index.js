const express= require("express");
const controller=require("../controller/index.js")

const routes = express.Router();


// put edita datos
// post el set
routes.get("/",controller.demo);


module.exports = routes;
