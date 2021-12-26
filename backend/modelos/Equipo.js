let mongoose = require("mongoose");
let Schema = mongoose.Schema;

const equipoSchema = new Schema({
    nombre: String,
    escudo: String,
    deporte: String
});


let Equipo = mongoose.model("Equipo", equipoSchema);
module.exports = Equipo;