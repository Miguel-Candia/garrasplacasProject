const controller = {};




controller.rendermain = (req,res) =>{
//consulta a la base dato
    console.log("Controller Demoo");

    res.render("main");


}


module.exports = controller;