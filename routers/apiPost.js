const express = require("express");
const router = express.Router();
const contactos = require("../models/contactosModels.js");

//código que no conocía pero que es muy importante! para que se le pueda hacer fetch a la api
router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

router.post("/apis/contactos", async (req, res) => {
    let body = req.body
    try
    {
        await contactos.create(body);
        //enviemos un json si todo salió bien!
        res.send({
            msg: `Enviado con éxito!`
        })
    }
    catch(e)
    {
        console.log(e);
    }
})

module.exports = router;