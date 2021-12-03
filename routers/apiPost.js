const express = require("express");
const router = express.Router();
const contactos = require("../models/contactosModels.js");

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