import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = (props) => {

    let paginaSeleccionada;
    useEffect(() => {
        if (props.paginaSeleccionada === undefined) {
            paginaSeleccionada = "nuevoPosteo"
        } else {
            paginaSeleccionada = props.paginaSeleccionada
        }

        let links = document.getElementsByClassName("navlink");

        for (let i = 0; i < links.length; i++) {
            links[i].classList.remove("bg-black-900");
            links[i].classList.remove("text-white");
            links[i].classList.add("text-black-600");

        }
        let elegido = document.getElementById(paginaSeleccionada);
        elegido.classList.add("bg-black-900")
        elegido.classList.remove("text-black-600")
        elegido.classList.add("text-white")


    }, [props.paginaSeleccionada])

    return (
        <div className="h-full bg-black pt-32 flex flex-col px-4">
            <NavLink id="nuevoPosteo" className="navlink text-white font-regular font-body hover:opacity-70 transition-all  rounded-md mx-4 my-2 px-4 py-2" to={{ pathname: "/admin", aboutProps: "nuevoPosteo" }}>Nuevo Posteo</NavLink>
            <NavLink id="nuestraGaleria" className="navlink  text-white font-regular font-body hover:opacity-70 transition-all rounded-md mx-4 my-2 px-4 py-2" to={{ pathname: "/admin", aboutProps: "nuestraGaleria" }}>Gestionar Galería</NavLink>
            <NavLink id="editarDatos" className="navlink  text-white font-regular font-body hover:opacity-70 transition-all rounded-md mx-4 my-2 px-4 py-2" to={{ pathname: "/admin", aboutProps: "editarDatos" }}>Editar Datos</NavLink>
            <NavLink id="nuevaStory" className="navlink  text-white font-regular font-body hover:opacity-70 transition-all rounded-md mx-4 my-2 px-4 py-2" to={{ pathname: "/admin", aboutProps: "nuevaStory" }}>Nueva Story</NavLink>
            <NavLink id="gestionarUsuarios" className="navlink  text-white font-regular font-body hover:opacity-70 transition-all rounded-md mx-4 my-2 px-4 py-2" to={{ pathname: "/admin", aboutProps: "gestionarUsuarios" }}>Gestionar Usuarios</NavLink>
            <NavLink to={{ pathname: "/" }} className="bg-orange py-3 rounded-3xl text-white text-center m-2 mt-8 text-base">Ir al sitio</NavLink>
        </div>
    )
}

export default (Sidebar)
