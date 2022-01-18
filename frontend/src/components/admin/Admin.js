import React from 'react'
import { connect } from 'react-redux'
import NavbarAdmin from './NavbarAdmin'
import PosteosContenedor from './posteos/PosteosContenedor'
import SubirAlbum from './SubirAlbum'
import EditarContenido from './EditarContenido'
import Login from './Login'
import StoriesContenedor from './stories/StoriesContenedor'
import GestionarUsuarios from './GestionarUsuarios'
import Sidebar from './Sidebar'

const Admin = (props) => {

    let pagina = props.location.aboutProps;

    let usuarioLogueado = props.usuarioLogueado;

    return (
        <div>
            {(usuarioLogueado === "") ?
                <Login /> :
                <div>
                    <NavbarAdmin />
                    <div className="bg-black-50">
                        <div className="col-span-2 h-screen fixed">
                            <Sidebar paginaSeleccionada={pagina} />
                        </div>

                        <div style={{ paddingLeft: '234px' }} className="w-full h-screen overflow-hidden ">
                            {(pagina === "nuestraGaleria") ?
                                <SubirAlbum /> :
                                (pagina === "editarDatos") ?
                                    <EditarContenido /> :
                                    (pagina === "nuevaStory") ?
                                        <StoriesContenedor /> :
                                        (pagina === "gestionarUsuarios") ?
                                            <GestionarUsuarios /> :
                                            <PosteosContenedor />
                            }
                        </div>
                    </div>


                </div>

            }
            {/*  <IntegranteStory integrante={"61de177df900c63ba93c6693"} /> */}


        </div >
    )
}

const mapStateToProps = (state) => ({
    usuarioLogueado: state.usuarioLogueado
})

export default connect(mapStateToProps)(Admin)
