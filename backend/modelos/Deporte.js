let mongoose = require("mongoose");
let Schema = mongoose.Schema;

const deporteSchema = new Schema({
    nombre: String
});


let Deporte = mongoose.model("Deporte", deporteSchema);
module.exports = Deporte;