const express= require("express");
const controller=require("../controller/controll.price.js")

const routes = express.Router();


// put edita datos
// post el set
routes.get("/price",controller.renderprice);


module.exports = routes;
