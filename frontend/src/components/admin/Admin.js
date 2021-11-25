import React from 'react'
import { connect } from 'react-redux'
import NavbarAdmin from './NavbarAdmin'
import PosteosContenedor from './posteos/PosteosContenedor'
import SubirAlbum from './SubirAlbum'
import EditarContenido from './EditarContenido'
import Login from './Login'

const Admin = (props) => {

    console.log(props.location.aboutProps)
    let pagina = props.location.aboutProps;

    let usuarioLogueado = props.usuarioLogueado;

    return (
        <div>
            {(usuarioLogueado === "") ?
                <Login /> :
                <div>
                    <NavbarAdmin />
                    {(pagina === "nuestraGaleria") ?
                        <SubirAlbum /> :
                        (pagina === "editarDatos") ?
                            <EditarContenido /> :
                            <PosteosContenedor />
                    }
                </div>
            }

        </div>
    )
}

const mapStateToProps = (state) => ({
    usuarioLogueado: state.usuarioLogueado
})

export default connect(mapStateToProps)(Admin)
