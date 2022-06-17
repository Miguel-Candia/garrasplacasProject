const express= require("express");
const controller=require("../controller/controll.about.js")

const routes = express.Router();


// put edita datos
// post el set
routes.get("/about",controller.renderabout);


module.exports = routes;
