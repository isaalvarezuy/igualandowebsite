let express = require("express");
let app = express();
let cors = require("cors");

let Equipo = require("./modelos/Equipo");
let Album = require("./modelos/Album");
let Dato = require("./modelos/Dato");
let Deporte = require("./modelos/Deporte");
let Usuario = require("./modelos/Usuario");


let mongoose = require("mongoose");
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'isabeltendenciasdeldiseno@gmail.com',
        pass: 'pruebamailinator'
    }
});

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
    console.log("Bienvenidox")
})

app.post("/iniciarsesion", (req, res) => {
    Usuario.findOne({ user: req.body.user, pass: req.body.pass }, (err, usuario) => {
        if (err) return res.json({ mensaje: "Error al consultar" });
        res.json(usuario);
    })

})

app.post("/insertar", (req, res) => {
    console.log(req.body);

    let usuario = new Usuario({
        user: req.body.user,
        pass: "igualando",
        nombreCompleto: req.body.nombreCompleto,
        rol: req.body.rol,
        apodo: req.body.apodo,
        avatar: req.body.avatar,
        visible: false
    })
    usuario.save((err, usuario) => {
        if (err) return res.json({ mensaje: "Error al insertar" });
        res.json(usuario);
    })
})

app.put("/cambiarContrasena", (req, res) => {
    console.log(req.body)
    Usuario.findByIdAndUpdate(req.body.user, { pass: req.body.passNuevo }, (err, usuario) => {
        if (err) return res.json({ mensaje: "Error al modificar" });
        res.json(usuario);
    }
    )
})
app.put("/mostrarUsuario", (req, res) => {
    console.log(req.body)
    Usuario.findByIdAndUpdate(req.body._id, { visible: true }, (err, usuario) => {
        if (err) return res.json({ mensaje: "Error al modificar" });
        res.json(usuario);
    }
    )
})
app.put("/ocultarUsuario", (req, res) => {
    console.log(req.body)
    Usuario.findByIdAndUpdate(req.body._id, { visible: false }, (err, usuario) => {
        if (err) return res.json({ mensaje: "Error al modificar" });
        res.json(usuario);
    }
    )
})


app.get("/listarDeportes", (req, res) => {
    Deporte.find((err, deporte) => {
        if (err) return res.json({ mensaje: "Error al consultar" });
        res.json(deporte);
    })
})
app.get("/listarUsuarios", (req, res) => {
    Usuario.find((err, usuario) => {
        if (err) return res.json({ mensaje: "Error al consultar" });
        res.json(usuario);
    })
})

app.get("/listarEquipos", (req, res) => {
    Equipo.find((err, equipos) => {
        console.log("entro")
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
app.post("/enviarForm", (req, res) => {
    console.log(req.body);

    var mailOptions = {
        from: `${req.body.mail}`,
        to: 'isabelalvence@gmail.com',
        subject: `Mensaje de ${req.body.nombre} - desde igualandolacancha.com`,
        html: `<h2>Recibiste el siguiente mensaje desde el formulario de contacto de tu sitio web</h2><br>
        ${req.body.mensaje}<br>
        <br>
        Enviado por  ${req.body.nombre} desde ${req.body.mail}`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            res.json("error");
        } else {
            console.log('Email sent: ' + info.response);
            res.json("exito");
        }
    });
})

app.delete("/eliminarAlbum", (req, res) => {
    console.log(req.body)
    Album.findByIdAndDelete(req.body.idBorrar, (err, album) => {
        if (err) return res.json({ mensaje: "Error al eliminar album" });
        res.json(album);
    })
})
app.delete("/eliminarUsuario", (req, res) => {
    console.log(req.body)
    Usuario.findByIdAndDelete(req.body.idBorrar, (err, usuario) => {
        if (err) return res.json({ mensaje: "Error al eliminar album" });
        res.json(usuario);
    })
})



let port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})