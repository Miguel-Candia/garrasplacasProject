const express= require("express");
const controller=require("../controller/controll.send.js")

const routes = express.Router();


// put edita datos
// post el set
routes.get("/send",controller.rendersend);


module.exports = routes;
