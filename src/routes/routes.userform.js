const express= require("express");
const multer = require('multer');
//const multer = require('multer');
const controller=require("../controller/controll.userform.js")

const routes = express.Router();

const storage = multer.diskStorage({
    // Destino donde dejar el archivo
    destination:'src/public/uploads/',
    // nombre del Archivo A DEJAR
    filename:function(req, file, cb){
        console.log("---------------------------Ver archivo-----------------------");
        console.log(file);
        cb(null, `${Date.now()}-${file.originalname}`)
      //  cb(null, file.fieldname + '-' + Date.now())
        
    }
})

const upload = multer({ storage:storage })

let multipleupload = upload.fields([{ name: 'ftreferencial' }, { name: 'ftcomprobante' }])


// put edita datos
// post el set

routes.get("/userform",controller.renderregion);
routes.post(
    "/registrarCliente",multipleupload,controller.registrarCliente
    );


//Guardar los datos del formlario en la base de datos




// Mostrar en userform
function getcollar(){}

function getregion(){}

function getcolor(){}

function gettamano(){}

function getcomuna(){}




module.exports = routes;
