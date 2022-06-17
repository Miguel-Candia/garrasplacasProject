const controller = {};




controller.renderinformations = (req,res) =>{
//consulta a la base dato
    console.log("Controller Demoo");

    res.render("informations");


}


module.exports = controller;