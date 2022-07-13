const express= require("express");
const multer = require('multer');
const controller=require("../controller/controll.userform.js")

const routes = express.Router();

/**
 * @module routesUserform
 * @description Metodos get y post de view userform
 */




const storage = multer.diskStorage({
    destination:'src/public/uploads/',
    filename:function(req, file, cb){
        console.log("---------------------------Ver archivo-----------------------");
        console.log(file);
        cb(null, `${Date.now()}-${file.originalname}`)  
    }
})

const upload = multer({ storage:storage })

let multipleupload = upload.fields([{ name: 'ftreferencial' }, { name: 'ftcomprobante' }])






/**
 * @function get/userform 
 * @description Funcion que renderiza al controller renderregion
 */

routes.get("/userform",controller.renderregion);

/**
 * @function post/registrarCliente 
 * @description Funcion que renderiza al controller registrarCliente
 */

routes.post(
    "/registrarCliente",multipleupload,controller.registrarCliente
    );



module.exports = routes;
