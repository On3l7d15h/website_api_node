const express = require("express");
const router = express.Router();
const contactos = require("../models/contactosModels");

router.get("/", (req, res) => {
    res.render("index");
})

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