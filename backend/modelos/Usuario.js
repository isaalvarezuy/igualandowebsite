let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    user: String,
    pass: String,
    nombreCompleto: String,
    rol: String,
    apodo: String,
    avatar: String,
    visible: Boolean,
});

let Usuario = mongoose.model("Usuario", usuarioSchema);
module.exports = Usuario;