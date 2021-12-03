const mongoose = require("mongoose");

const contactosSchema = mongoose.Schema(
{
    nombre: String, 
    apellido: String,
    número: Number
}, 
{
    versionKey: false
});

const contactos = mongoose.model("contactos", contactosSchema);

module.exports = contactos;