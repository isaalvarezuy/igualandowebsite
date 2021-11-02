let mongoose = require("mongoose");
let Schema = mongoose.Schema;

const deporteSchema = new Schema({
    deporte: String
});


let Deporte = mongoose.model("Deporte", deporteSchema);
module.exports = Deporte;