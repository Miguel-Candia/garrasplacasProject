
const fs = require('fs/promises');
const controller = {};


/**
 * @module controllerUserform
 * @description Controlador de la vista de formulario de cliente
 */


/**
 * @function renderregion
 * @description Funcion que renderiza la pagina de region
 */
controller.renderregion = (req, res) => {

try{
    req.getConnection((err, con) => {

        con.query("SELECT * FROM tamano", (error, tamano, fields) => {
            if (error){
                res.render("error",{errores:error.message});
            }
            con.query("SELECT * FROM collar", (error, collar, fields) => {
                if (error){
                    res.render("error",{errores:error.message});
                }
                con.query("SELECT * FROM color", (error, color, fields) => {
                    if (error){
                        res.render("error",{errores:error.message});
                    }
                    con.query("SELECT * FROM comuna", (error, comuna, fields) => {
                        if (error){
                            res.render("error",{errores:error.message});
                        }
                        con.query("SELECT * FROM region", (error, regiones, fields) => {
                            if (error){
                                res.render("error",{errores:error.message});
                            }
                            res.render('userform', {
                                regiones,
                                comunas: comuna,
                                colores: color,
                                collares: collar,
                                tamanos: tamano
                            });
                        });
                    });
                });
            });
        });
    });
}catch(err){
    console.log(err);
    res.render("error",{errores:err.message});
}

};





/**
 * @function registrarCliente
 * @description Funcion que renderiza la pagina de region
 * @param {Date} fecha fecha registro cliente
 * @param {String} nombre nombre registro cliente
 * @param {String} rut Rut registro cliente
 * @param {int} telefono telefono registro cliente
 * @param {int} comuna comuna registro cliente
 * @param {String} calle calle registro cliente
 * @param {int} numero numero registro cliente
 * @param {String} email email registro cliente
 * @param {String} nombremascota nombre mascota registro cliente
 * @param {String} tipomascota tipo mascota registro cliente
 * @param {int} collar collar registro cliente
 * @param {int} colorcollar color del collar registro cliente
 * @param {int} tamano tamaño registro cliente
 * @param {int} colorplaca color de la placa registro cliente
 * @param {String} informacion informacion registro cliente
 * 
 */
controller.registrarCliente = async (req, res) => {

    try{
        console.log("------Ver Bodyy--------")
        console.log(req.body)
        console.log("------Ver FILES--------")
        console.log(req.files)
    const {
        fecha=new Date(),
        nombre, 
        rut, 
        telefono, 
        comuna,
        calle,
        numero,
        email,
        nombremascota,
        tipomascota,
        collar,
        colorcollar,
        tamano,
        colorplaca,
        informacion
    }=req.body

    const ftreferencial = req.files.ftreferencial[0].filename;
    const ftcomprobante = req.files.ftcomprobante[0].filename;

    console.log("--------------insert------------")
    console.log(ftreferencial)
    console.log(ftcomprobante)

    req.getConnection((err, con) => { 

       

         let data=[fecha,nombre,rut,telefono,comuna,calle,numero,email
             ,nombremascota,tipomascota,collar,colorcollar,tamano,colorplaca,informacion,ftreferencial,ftcomprobante];

         let inserquery = con.query("INSERT INTO cliente (fecha,nombre,rut, telefono,id_comuna,calle,numero,mail,nombremascota,tipomascota,id_collar,colorcollar,id_tamano,colorplaca,informacion,ftreferencial,ftcomprobante) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",data);

         if(inserquery){

             res.redirect("/");
             
         }else{
             res.render("error",{errores:"Error al guardar el registro intentar mas tarde"});
         }
       });



}catch(err){
    console.log(err);
    res.render("error",{errores:err.message});
}

}




module.exports = controller;

