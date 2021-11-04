import React, { useEffect, useState } from 'react';
import Axios from 'axios'
import NavbarAdmin from './NavbarAdmin';
import { Table, TextInputField, TrashIcon, SelectField, FilePicker } from 'evergreen-ui'

export default function SubirAlbum() {

    useEffect(() => {

        fetch('http://localhost:3001/listarDeportes', {
            method: "GET",
        }).then(r => r.json())
            .then(r => {
                console.log(r);
                setDeportes(r);

                /* traer albumes */
                fetch('http://localhost:3001/listarAlbums', {
                    method: "GET",
                }).then(r => r.json())
                    .then(r => {
                        setAlbums(r);
                    })

            })

    }, [])

    const [selectedFile, setSelectedFile] = useState([]);
    const [titulo, setTitulo] = useState("");
    const [deportes, setDeportes] = useState([]);
    const [deporte, setDeporte] = useState("");
    const [fecha, setFecha] = useState("");
    const [mensaje, setMensaje] = useState("")
    const [albums, setAlbums] = useState([])

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
                /* actualizar albums */


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
            <NavbarAdmin />
            <div className="w-10/12 mx-auto pt-48">
                <div className="grid grid-cols-2 gap-12">
                    <div className="col-span-1">
                        <h2 className="font-title text-4xl" >Subir album</h2>
                        <TextInputField
                            label="Título"
                            required
                            placeholder="Título del album"
                            onChange={e => setTitulo(e.target.value)}
                        />
                        <SelectField width="100%" onChange={e => setDeporte(e.target.value)} label="Deporte">
                            {deportes.map(deporte => <option key={deporte._id} value={deporte._id}>{deporte.deporte}</option>)}
                        </SelectField>
                        <br></br>
                        {/*  <input type="text"  /> */}
                        <input type="date" className=" border px-2 font-body rounded border-input opacity-70 w-full" onChange={e => setFecha(e.target.value)} />

                        <FilePicker className="mt-4"
                            multiple
                            width={"100%"}
                            onChange={files => {
                                setSelectedFile(files);
                                console.log(files)
                            }}
                            placeholder="Subir fotos"
                        />

                        <button className="btn block bg-orange py-2 px-4 rounded-3xl text-white text-base mt-4" id="btn-download" download="post.jpg" onClick={crearAlbum}>Subir Album</button>

                        {mensaje}
                    </div>
                    <div className="col-span-1">
                        <h2 className="font-title text-4xl" >Albumes</h2>
                        <Table>
                            <Table.Head>
                                <Table.TextHeaderCell>Título</Table.TextHeaderCell>
                                <Table.TextHeaderCell>Fotos</Table.TextHeaderCell>
                                <Table.TextHeaderCell>Acciones</Table.TextHeaderCell>
                            </Table.Head>
                            <Table.Body >
                                {albums.map((album) => (
                                    <Table.Row key={album._id} >
                                        <Table.TextCell>{album.titulo}</Table.TextCell>
                                        <Table.TextCell>{album.fotos.length}</Table.TextCell>
                                        <Table.TextCell><TrashIcon /></Table.TextCell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>
                    </div>
                </div>

            </div>
        </div >
    )
}
