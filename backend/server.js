let express = require("express");
let app = express();
let cors = require("cors");

let Prueba = require("./modelos/Prueba");
let Album = require("./modelos/Album");
let Dato = require("./modelos/Dato");
let Deporte = require("./modelos/Deporte");
let Usuario = require("./modelos/Usuario");

let mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:admin@cluster0.8eqwb.mongodb.net/igualando?retryWrites=true&w=majority",
    { useNewUrlParser: true }
)


let db = mongoose.connection;

db.once("open", () => {
    console.log("Conexion con base de datos establecida");
});


app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }))
app.use(cors());


app.use((req, res, next) => {
    console.log("Por middelware");
    next();
})


app.get("/", (req, res) => {
    res.send("Bienvenido");
})

app.post("/iniciarsesion", (req, res) => {
    Usuario.findOne({ user: req.body.user, pass: req.body.pass }, (err, usuario) => {
        if (err) return res.json({ mensaje: "Error al consultar" });
        res.json(usuario);
    })

})

app.get("/listarDeportes", (req, res) => {
    Deporte.find((err, deporte) => {
        if (err) return res.json({ mensaje: "Error al consultar" });
        res.json(deporte);
    })
})

app.get("/listarEquipos", (req, res) => {
    Prueba.find((err, equipos) => {
        console.log("hole")
        if (err) return res.json({ mensaje: "Error al consultar" });
        res.json(equipos);
    })
})

app.get("/traerDatos", (req, res) => {
    Dato.find((err, datos) => {
        if (err) return res.json({ mensaje: "Error al consultar" });
        res.json(datos);
    })
})

app.put("/modificarDatos", (req, res) => {
    Dato.findByIdAndUpdate("61749223e35434d1ed844cd0", { programas: req.body.programas, socias: req.body.socias, partidos: req.body.partidos }, (err, dato) => {
        if (err) return res.json({ mensaje: "Error al modificar" });
        res.json(dato);
    })
})



app.get("/listarAlbums", (req, res) => {
    Album.find((err, albums) => {
        if (err) return res.json({ mensaje: "Error al consultar" });
        res.json(albums);
    })
})

app.post("/crearAlbum", (req, res) => {
    console.log(req.body);

    let album = new Album({
        titulo: req.body.titulo,
        deporte: req.body.deporte,
        fecha: req.body.fecha,
        fotos: req.body.fotos
    })
    album.save((err, album) => {
        if (err) return res.json({ mensaje: "Error al insertar" });
        res.json(album);
    })
})

app.delete("/eliminarAlbum", (req, res) => {
    console.log(req.body)
    Album.findByIdAndDelete(req.body.idBorrar, (err, album) => {
        if (err) return res.json({ mensaje: "Error al eliminar album" });
        res.json(album);
    })
})



let port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})