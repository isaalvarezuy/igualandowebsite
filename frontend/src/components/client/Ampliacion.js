import React from 'react'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'

export default function Ampliacion(props) {
    console.log(props)
    let album = props.location.aboutProps.album;
    return (
        <div>
            <Navbar />
            <div className="w-10/12 mx-auto pt-32">
                <div>
                    <h1>{album.titulo}</h1>
                    <div>
                        {album.fotos.map(foto => <div key={foto.source}> <NavLink to={{ pathname: '/ampliacionFoto', aboutProps: { fotoActual: foto.source, fotos: album.fotos } }}><div className="w-60 float-left mr-4" ><img src={foto.source} /></div> </NavLink></div>)}
                    </div>
                </div>
            </div>
        </div >
    )
}
