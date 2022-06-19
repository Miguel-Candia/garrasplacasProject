const controller = {};




controller.renderregion = (req,res) =>{
    
     req.getConnection((err,con)=>{

      con.query("SELECT * FROM REGION",(err,regiones)=>{
            if(err){
                console.log("Error: "+err);
                res.render("error",(err.messages));
            }else{
                console.log(regiones);
            res.render("userform",{regiones});
                
            }
        });


    });
    
}

module.exports = controller;
/*
controller.rendercomuna = (req,res) =>{
    
    req.getConnection((err,con)=>{

       con.query("SELECT * FROM COMUNA",(err,comunas)=>{
           if(err){
               console.log("Error: "+err);
               res.render("error",(err.messages));
           }else{
               console.log(comunas);
               res.render("userform",{comunas});
  
           }
       });


   });
   
}
*/





