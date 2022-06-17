const controller = {};




controller.rendermanagadminpedidos = (req,res) =>{
//consulta a la base dato
    console.log("Controller Demoo");

    res.render("managadminpedidos");


}


module.exports = controller;