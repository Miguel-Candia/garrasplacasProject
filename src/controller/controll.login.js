const controller = {};




controller.validarlogin = (req,res) =>{
//consulta a la base dato
console.log(req.body);

res.send("");

}

controller.renderlogin = (req,res) =>{
    //consulta a la base dato
    console.log(req.body);
    
    res.render("login");
    
    }


module.exports = controller;