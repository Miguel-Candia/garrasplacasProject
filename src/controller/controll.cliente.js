const controller = {};


/**
 * @module controllerCliente
 */

/**
 * @function listcliente
 * @description Funcion que lista los clientes desde la bsae de datos.
 */
controller.listcliente = (req,res) =>{
    req.getConnection((err,con)=>{
        con.query("Select * from cliente",(err,data) =>{
            if(err){
                console.log(err);
                res.send(err.message);
            }else{
                console.log(data);
                res.render("cliente",{data});

            }
        });
    });
}


module.exports = controller;