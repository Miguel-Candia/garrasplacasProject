const controller = {};




controller.demo = (req,res) =>{
//consulta a la base dato
    console.log("Controller Demoo");
   // req.flash('messageexito', 'Formulario Enviado Correctamente')
  //  res.render('index', { messages: req.flash('messageexito') });
    res.render("index");


}


module.exports = controller;

