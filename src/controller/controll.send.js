const controller = {};




controller.rendersend = (req,res) =>{
//consulta a la base dato
    console.log("Controller Demoo");

    res.render("send");


}


module.exports = controller;