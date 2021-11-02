let mongoose = require("mongoose");
let Schema = mongoose.Schema;

const fotosSchema = new Schema({
    source: String,
});

let albumSchema = new Schema({
    titulo: String,
    deporte: String,
    fecha: Date,
    fotos: [fotosSchema],
});



let Album = mongoose.model("Album", albumSchema);
module.exports = Album;