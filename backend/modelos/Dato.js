let mongoose = require("mongoose");
let Schema = mongoose.Schema;

const datoSchema = new Schema({
    programas: Number,
    socias: Number,
    partidos: Number,
});


let Dato = mongoose.model("Dato", datoSchema);
module.exports = Dato;