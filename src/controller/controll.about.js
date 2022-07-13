const controller = {};


/**
 * @module controllAbout
 * @description Metodo render about
 */



controller.renderabout = (req,res) =>{
    console.log("Controller Demoo");

    res.render("about");


}


module.exports = controller;