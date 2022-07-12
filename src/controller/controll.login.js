const controller = {};

/**
 * @module controller.login
 */



controller.validarlogin = (req,res) =>{
//consulta a la base dato
console.log(req.body);

res.send("");

}

/**
 * @function renderlogin
 * @description Funcion que renderiza la pagina de login
 */
controller.renderlogin = (req,res) =>{
    //consulta a la base dato
    console.log(req.body);
    
    res.render("login");
    
    }


module.exports = controller;