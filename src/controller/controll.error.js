const controller = {};



/**
 * @global
 * @function rendererror
 * @description renderiza la pagina de error
 */
controller.rendererror = (req,res) =>{
//consulta a la base dato
    console.log("Controller Demoo");

    res.render("error");


}


module.exports = controller;