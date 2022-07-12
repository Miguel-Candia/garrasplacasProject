
const fs = require('fs/promises');
const controller = {};

//
controller.renderregion = (req, res) => {
    // coll back
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






controller.registrarCliente = async (req, res) => {

    try{
        console.log("------Ver Bodyy--------")
        console.log(req.body)
        console.log("------Ver FILES--------")
        console.log(req.files)
    //desestructurar objeto
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
             //redirect se entrega la Ruta!
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

