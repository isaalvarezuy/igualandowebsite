let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let pruebaSchema = new Schema({
    equipo: String,
    escudo: String
});



let Prueba = mongoose.model("Prueba", pruebaSchema);
module.exports = Prueba;