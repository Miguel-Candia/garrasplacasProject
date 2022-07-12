const controller = {};


controller.renderloginadmin = (req,res) =>{

    res.render("loginadmin");
}



controller.validarlogin = (req, res) => {

    try{

    const {
        usuario,
        contraseña
    }=req.body

    req.getConnection((err, con) => {

        let data=[usuario,contraseña];

        let valquery = con.query("SELECT * FROM administrador WHERE USUARIO= ? AND CONTRASEÑA= ?",data, (err, rows) => {

            console.log(rows);
  
            if(rows.length>= 1){
                console.log("VERDADEROOOOOOOOOOOOO");
            res.redirect("/managadminpedidos");

            }else{
                res.render("error",{errores:"Error al Iniciar sesion"});

            }

            });
/*

        if(valquery){
            //redirect se entrega la Ruta!
            console.log("VERDADEROOOOOOOOOOOOO");
            res.redirect("/managadminpedidos");
        }else{
            res.render("error",{errores:"Error al Iniciar sesion"});
        }
*/
    });

}catch(err){
    console.log(err);
    res.render("error",{errores:err.message});
}

}



module.exports = controller;