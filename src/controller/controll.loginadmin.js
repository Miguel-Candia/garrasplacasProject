const controller = {};


controller.renderloginadmin = (req,res) =>{
//consulta a la base dato
    console.log("Controller Demoo");

    res.render("loginadmin");
}


module.exports = controller;