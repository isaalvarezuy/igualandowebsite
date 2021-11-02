import React, { useEffect, useState } from 'react';
import Axios from 'axios'

export default function SubirAlbum() {

    useEffect(() => {

        fetch('http://localhost:3001/listarDeportes', {
            method: "GET",
        }).then(r => r.json())
            .then(r => {
                console.log(r);
                setDeportes(r);
            })

    }, [])

    const [selectedFile, setSelectedFile] = useState([]);
    const [titulo, setTitulo] = useState("");
    const [deportes, setDeportes] = useState([]);
    const [deporte, setDeporte] = useState("");
    const [fecha, setFecha] = useState("");
    const [mensaje, setMensaje] = useState("")

    /* me traigo los deportes de la db */



    const crearAlbum = async () => {
        const fotos = await uploadImages()
        console.log(fotos)
        /* creo el objeto album */
        let nuevoAlbum = {
            titulo: titulo,
            deporte: deporte,
            fecha: fecha,
            fotos: fotos
        }

        /* agrego el album a la la collection albums */
        fetch('http://localhost:3001/crearAlbum', {
            method: "POST",
            body: JSON.stringify(nuevoAlbum),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(r => r.json())
            .then(r => {
                console.log(r);
                setMensaje("album subido con exito")
            })

    }


    const uploadImages = () => {
        setMensaje("subiendo fotos...")
        const fotos = selectedFile.map(file => {
            const formData = new FormData()
            formData.append("file", file);
            formData.append("upload_preset", "igualando")
            return Axios.post(
                "https://api.cloudinary.com/v1_1/isita/image/upload",
                formData
            ).then((r) => {
                console.log(r)
                let foto = { source: r.data.url }
                return foto
            });
        });

        return Promise.all(fotos);
    }


    return (
        <div>
            <input type="text" onChange={e => setTitulo(e.target.value)} />
            <select onChange={e => setDeporte(e.target.value)}>
                {deportes.map(deporte => <option value={deporte._id}>{deporte.deporte}</option>)}
            </select>
            {/*  <input type="text"  /> */}
            <input type="date" onChange={e => setFecha(e.target.value)} />
            <input multiple type="file" name="image" onChange={e => {
                setSelectedFile([...e.target.files]);
                console.log([...e.target.files])
            }} />
            <button onClick={crearAlbum}>Submit</button>
            {mensaje}


        </div>
    )
}
