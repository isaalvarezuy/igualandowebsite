
export const initialState = {
    img: "",
    texto: "",
    equipos: [],
    equipo1: "",
    sociaVitalicia: { "fotoFondo": "", "fotoMain": "", "nombre": "", "profesion": "", "fecha": "", "spCode": "", "frase": "", "darkMode": false },
    noticias: { "foto": "", "titulo": "", "darkMode": false },
    proximoPartido: { "eqLocal": "", "eqVisitante": "", "fecha": "", "hora": "", "lugar": "", "fotoLocal": "", "fotoVisitante": "", "deporte": [], "darkMode": false },
    finalPartido: { "eqLocal": "", "eqVisitante": "", "pLocal": "", "pVisitante": "", "foto": "", "deporte": [], "darkMode": false },
    albums: [],
    deportes: [],
    integrantes: [
        { nombre: "Cecilia Piazza", rol: "Periodista deportivo", chiste: "No presenta ni un límite", foto: "https://res.cloudinary.com/isita/image/upload/v1636928040/static/Avatars_web_2x_pk94de.png" },
        { nombre: "Alfredo Raucher", rol: "Fotográfo", chiste: "Lengua filosa", foto: "https://res.cloudinary.com/isita/image/upload/v1636928039/static/Avatars_web_2x-1_dtfftv.png" },
        { nombre: "Vicky Burisich", rol: "Periodista deportivo", chiste: "Yendo al Chuy", foto: "https://res.cloudinary.com/isita/image/upload/v1636928039/static/Avatars_web_2x-2_nywwjl.png" },
        { nombre: "Facundo Banchero", rol: "Periodista deportivo", chiste: "El dueño del programa", foto: "https://res.cloudinary.com/isita/image/upload/v1636928040/static/Avatars_web_2x-3_dzfe9j.png" },
        { nombre: "Mariana Alvarez", rol: "Periodista deportivo", chiste: "Y los resultados son...", foto: "https://res.cloudinary.com/isita/image/upload/v1636928040/static/Avatars_web_2x-4_kskzfv.png" },
    ],
    usuarioLogueado: "",
    url: "http://localhost:3001",

}

/* https://igualando.herokuapp.com/ */