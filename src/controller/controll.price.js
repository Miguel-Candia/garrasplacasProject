const controller = {};




controller.renderprice = (req,res) =>{
//consulta a la base dato
    console.log("Controller Demoo");

    res.render("price");


}


module.exports = controller;