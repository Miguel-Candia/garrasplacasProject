const controller = {};




controller.rendertransference = (req,res) =>{
//consulta a la base dato
    console.log("Controller Demoo");

    res.render("transference");


}


module.exports = controller;