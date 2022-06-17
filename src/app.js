const express= require("express");
const morgan= require("morgan");
const con = require("express-myconnection");
const {database} = require("./keys");
const mysql=require("mysql");
const path=require("path");


// configuracion de los servidores
const app=express();
app.set("port",3000);
app.set("views", path.join(__dirname,"view"));
app.set("view engine","ejs");
app.use(morgan("dev"));
app.use(con(mysql, database));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,"public")));

//rutas
app.use(require("./routes/index"));
app.use(require("./routes/routes.cliente"));
app.use(require("./routes/routes.login"));
app.use(require("./routes/routes.userform"));
app.use(require("./routes/routes.transference"));
app.use(require("./routes/routes.send"));
app.use(require("./routes/routes.price"));
app.use(require("./routes/routes.managadminpedidos"));
app.use(require("./routes/routes.managadmin"));
app.use(require("./routes/routes.main"));
app.use(require("./routes/routes.informations"));
app.use(require("./routes/routes.about"));
app.use(require("./routes/routes.loginadmin"));

app.listen(app.get("port"), ()=> {
     console.log(`Conectado en puerto ${app.get("port")}`);
});