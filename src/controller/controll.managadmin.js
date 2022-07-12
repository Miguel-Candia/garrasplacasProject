const controller = {};

/**
 * @module controller/controll.managadmin
 * @description Controlador para la vista de administracion de productos
 */


/*
controller.renderselect = (req,res) =>{
    //consulta a la base dato
    try{
        req.getConnection((err, con) => {
            con.query("SELECT * FROM tamano", (error, tamano, fields) => {
                if (error){
                    res.render("error",{errores:error.message});
                }
                    con.query("SELECT * FROM color", (error, color, fields) => {
                        if (error){
                            res.render("error",{errores:error.message});
                        }
                                res.render('managadmin', {
                                    colores: color,
                                    tamanos: tamano
                                });
                            });
                        });
                    });
            
    }catch(err){
        console.log(err);
        res.render("error",{errores:err.message});
    }
    
    
    }
*/

/**
 * @function renderinventario
 * @description Funcion que renderiza la pagina de administracion de inventario
 */
controller.renderinventario = (req,res) =>{
//consulta a la base dato
try{
    req.getConnection((err, con) => {

        con.query("SELECT * FROM collar, color, tamano WHERE collar.ID_COLOR = color.ID_COLOR AND collar.ID_TAMANO = tamano.ID_TAMANO ", (error, invent, fields) => {
            if (error){
                res.render("error",{errores:error.message});
            }
            res.render('managadmin', {
                inventario: invent
            });
           
        });
    });
}catch(err){
    console.log(err);
    res.render("error",{errores:err.message});
}


}

/**
 * @function registrarProducto
 * @description Funcion que registra un producto en la base de datos
 * @param {string} collarname - Nombre del collar
 * @param {string} collartamano - Tamaño del collar
 * @param {string} collarcolor - Color del collar
 */
controller.registrarProducto = (req, res) => {

    try{
    //desestructurar objeto
    const {
        collarname, 
        colorcollar, 
        tamanocollar
    }=req.body

    req.getConnection((err, con) => {  

        let data=[collarname,colorcollar,tamanocollar];

        let inserquery = con.query("INSERT INTO collar (nombre,id_color,id_tamano) VALUES(?,?,?)",data);

        if(inserquery){
            //redirect se entrega la Ruta!
            res.redirect("/managadmin");
        }else{
            res.render("error",{errores:"Error al guardar el registro intentar mas tarde"});
        }
      });



}catch(err){
    console.log(err);
    res.render("error",{errores:err.message});
}

}

/**
 * @function eliminarProducto
 * @description Funcion que elimina un producto de la base de datos
 * @param {string} eliminarProducto - Id del collar
 */
controller.eliminarProducto = (req, res) => {

    try{
    //desestructurar objeto
    const {
        eliminarproduct
    }=req.body

    req.getConnection((err, con) => {  

        let data=[eliminarproduct];

      //  let inserquery = con.query("INSERT INTO collar (nombre,id_color,id_tamano) VALUES(?,?,?)",data);
        let inserquery = con.query("DELETE  FROM  collar WHERE id_collar=(?) ",data);

        if(inserquery){
            //redirect se entrega la Ruta!
            res.redirect("/managadmin");
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