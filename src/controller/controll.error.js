const controller = {};




controller.rendererror = (req,res) =>{
//consulta a la base dato
    console.log("Controller Demoo");

    res.render("error");


}


module.exports = controller;