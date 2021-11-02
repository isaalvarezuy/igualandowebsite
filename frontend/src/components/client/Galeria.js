import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'

export default function Galeria() {

    const [albumsFiltrados, setAlbumsFiltrados] = useState([])
    const [albums, setAlbums] = useState([])
    const [deportes, setDeportes] = useState([])
    const [anios, setAnios] = useState([])

    const campoDeporte = useRef()
    const campoTitulo = useRef()
    const campoAnio = useRef()

    useEffect(() => {
        fetch('http://localhost:3001/listarDeportes', {
            method: "GET",
        }).then(r => r.json())
            .then(r => {

                setDeportes(r);

                fetch('http://localhost:3001/listarAlbums', {
                    method: "GET",
                }).then(r => r.json())
                    .then(r => {

                        setAlbums(r);
                        setAlbumsFiltrados(r)

                        let aniosAux = []
                        /* me guardo los años */
                        for (let i = 0; i < r.length; i++) {
                            let anio = r[i].fecha.substring(0, 4)
                            if (aniosAux.length === 0) {
                                aniosAux = [...aniosAux, anio]
                            } else {
                                let existe = false
                                for (let ii = 0; ii < aniosAux.length; ii++) {
                                    if (anio === aniosAux[ii]) {
                                        existe = true
                                    }
                                    if (existe === false) {
                                        aniosAux = [...aniosAux, anio]
                                    }
                                }
                            }
                        }
                        aniosAux.sort(function (a, b) {
                            return b - a;
                        });
                        setAnios(aniosAux)
                    })
            })


    }, [])

    const filtrar = () => {

        let filtro = albums.filter(album => album.titulo.toLowerCase().includes(campoTitulo.current.value.toLowerCase()))
        if (campoDeporte.current.value !== "todos") {
            filtro = filtro.filter(album => album.deporte === campoDeporte.current.value)
        }
        if (campoAnio.current.value !== "todos") {
            filtro = filtro.filter(album => album.fecha.includes(campoAnio.current.value))
        }
        setAlbumsFiltrados(filtro);

    }

    return (
        <div>
            <Navbar />
            {/* filtros */}
            <div className="pt-40">
                <select onChange={filtrar} ref={campoDeporte}>
                    <option value="todos">Todos los deportes</option>
                    {deportes.map(deporte => <option key={deporte._id} value={deporte._id}>{deporte.deporte}</option>)}

                </select>
                <input className="border" type="text" onChange={filtrar} ref={campoTitulo} />

                <select onChange={filtrar} ref={campoAnio}>
                    <option value="todos">Cualquier año</option>
                    {anios.map(anio => <option key={anio} value={anio}>{anio}</option>)}
                </select>
            </div>
            <div className="w-10/12 mx-auto pt-3">
                <div>
                    {albumsFiltrados.map(a => <div key={a._id}> <NavLink to={{ pathname: '/ampliacion', aboutProps: { album: a } }}><div className="w-60 float-left mr-4" ><img src={a.fotos[0].source} /><p >{a.titulo}</p></div> </NavLink></div>)}
                </div>
            </div>
        </div>


    )
}
