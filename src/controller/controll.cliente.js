const controller = {};




controller.listcliente = (req,res) =>{
//consulta a la base dato
    req.getConnection((err,con)=>{
        con.query("Select * from cliente",(err,data) =>{
            if(err){
                console.log(err);
                res.send(err.message);
            }else{
                console.log(data);
                res.render("cliente",{data});

            }
        });
    });
}


module.exports = controller;