const controller = {};




controller.demo = (req,res) =>{
//consulta a la base dato
    console.log("Controller Demoo");

    res.render("index");


}


module.exports = controller;

