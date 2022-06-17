const controller = {};




controller.renderuserform = (req,res) =>{
    
     req.getConnection(async(err,con)=>{

        let regiones = await con.query("SELECT * FROM REGION");


  /*     let collares = con.query("SELECT * FROM COLLAR",(err,rows)=>{
            if(err){
                console.log("Error: "+err);
                res.render("error",(err.messages));
            }else{
                return rows;
            }
        });

         console.log(collares);
         
*/
        console.log(regiones);
        res.render("userform",{regiones});




    });
}


module.exports = controller;