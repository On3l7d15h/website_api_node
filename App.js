//nuestras importaciones y variables
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config()

    const app = express();
    const port = process.env.PORT || 1995;

//Usando nuestras vistas y archivos locales!
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

//usando configuraciones necesarias para el envío de datos con la Api!
app.use(express.json())
app.use(express.urlencoded({extended: true}));   

//otras variables;
const user = process.env.DBUSER;
const pass = process.env.DBPASS;
const name = process.env.DBNAME;

//conectando la bd
mongoose.connect(`mongodb+srv://${user}:${pass}@cluster0.nlyfg.mongodb.net/${name}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Conectado!"))
    .catch(e => console.log(e))

//llamando nuestro Primer get
app.use("/", require("./routers/apiGet.js"));
app.use("/", require("./routers/apiPost.js"));

//código que no conocía pero que es muy importante!
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//Mostrando en consola!
app.listen(port, () => console.log(`Abriendo el servidor en el puerto ${port}`));