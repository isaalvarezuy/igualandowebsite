import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { SearchInput, Select } from 'evergreen-ui'

const Galeria = (props) => {


    let { albums, deportes } = props;

    const [anios, setAnios] = useState([])
    const [albumsFiltrados, setAlbumsFiltrados] = useState([])

    const [titulo, setTitulo] = useState("")
    const [deporte, setDeporte] = useState("todos")
    const [anio, setAnio] = useState("todos")


    useEffect(() => {

        let aniosAux = []

        for (let i = 0; i < albums.length; i++) {
            let anio = albums[i].fecha.substring(0, 4)
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
        setAlbumsFiltrados(albums)

    }, [albums])

    useEffect(() => {
        filtrar()
    }, [titulo, deporte, anio])

    const convertirAString = (fecha) => {

        let aux = new Date(fecha);

        let dia = aux.getDate();
        if (dia < 10) {
            dia = `0${dia}`
        }
        let mes = aux.getMonth() + 1;
        if (mes < 10) {
            mes = `0${mes}`
        }
        let anio = aux.getFullYear();

        let fechaString = `${dia}.${mes}.${anio}`
        return (fechaString)

    }

    const filtrar = () => {
        let filtro = albums.filter(album => album.titulo.toLowerCase().includes(titulo.toLowerCase()))
        if (deporte !== "todos") {
            filtro = filtro.filter(album => album.deporte === deporte)
        }
        if (anio !== "todos") {
            filtro = filtro.filter(album => album.fecha.includes(anio))
        }
        setAlbumsFiltrados(filtro);

    }

    return (
        <div>
            <Navbar />
            {/* filtros */}
            <div style={{ paddingTop: '88px' }}>
                <div className="bg-white  py-2 items-center">
                    <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 ">
                        <div className="col-span-1">
                            <SearchInput width="100%" placeholder="Buscar partido..." onChange={(e) => {
                                setTitulo(e.target.value);
                                filtrar()
                            }} /></div>
                        <div className="col-span-1">
                            <Select width="100%" onChange={(e) => {
                                setDeporte(e.target.value);
                                filtrar()
                            }} >
                                <option value="todos">Todos los deportes</option>
                                {deportes.map(deporte => <option key={deporte._id} value={deporte._id}>{deporte.deporte}</option>)}
                            </Select>
                        </div>
                        <div className="col-span-1">
                            <Select width='100%' onChange={(e) => {
                                setAnio(e.target.value);
                                filtrar()
                            }} >
                                <option value="todos">Cualquier año</option>
                                {anios.map(anio => <option key={anio} value={anio}>{anio}</option>)}
                            </Select>
                        </div>


                    </div>

                </div>

                <div className="w-10/12 grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 mx-auto pt-3">

                    {albumsFiltrados.map(a => <div className="col-span-1 text-center font-body font-semibold" key={a._id}> <NavLink to={{ pathname: '/ampliacion', aboutProps: { album: a } }}><div className="h-40 mb-2" style={{ background: `url(${a.fotos[0].source})  center/cover` }} ></div>
                        {deportes.map(d => (d._id === a.deporte) ? <p key={d._id} className="text-xs tracking-wide opacity-75 uppercase">{d.deporte}</p> : "")}
                        <p className="text-base font-semibold">{a.titulo}</p>
                        <p className="text-sm font-normal opacity-75">{convertirAString(a.fecha)}</p>

                    </NavLink></div>)}
                </div>
            </div>
        </div >


    )
}
const mapStateToProps = (state) => ({
    albums: state.albums,
    deportes: state.deportes,

})


export default connect(mapStateToProps)(Galeria)