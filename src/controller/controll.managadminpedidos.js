const controller = {};




controller.renderpedidos = (req,res) =>{
    try{
        req.getConnection((err, con) => {
    
            con.query("SELECT * FROM cliente, comuna WHERE cliente.ID_COMUNA = comuna.ID_COMUNA", (error, cliente, fields) => {
                if (error){
                    res.render("error",{errores:error.message});
                }
                res.render('managadminpedidos', {
                    clientes: cliente
                });
               
            });
        });
    }catch(err){
        console.log(err);
        res.render("error",{errores:err.message});
    }

 //   res.render("managadminpedidos");


}


module.exports = controller;