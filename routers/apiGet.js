const express = require("express");
const router = express.Router();
const contactos = require("../models/contactosModels");

router.get("/", (req, res) => {
    res.render("index");
})

//código que no conocía pero que es muy importante!
router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

router.get("/apis", async (req, res) => {
    
    try 
    {
        const data = await contactos.find();
        res.render("data", { contact: data });
    }
    catch(e)
    {
        console.log(e);
    }
})

router.get("/apis/contactos", async (req, res) => {
    
    try 
    {
        const data = await contactos.find();
        res.send({ contact: data });
    }
    catch(e)
    {
        console.log(e);
    }
})

module.exports = router;