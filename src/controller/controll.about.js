const controller = {};




controller.renderabout = (req,res) =>{
//consulta a la base dato
    console.log("Controller Demoo");

    res.render("about");


}


module.exports = controller;