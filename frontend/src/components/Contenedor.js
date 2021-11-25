import React, { useEffect } from 'react'
import Home from './client/Home'
import Galeria from './client/Galeria'
import Ampliacion from './client/Ampliacion'
import { Route, Switch } from 'react-router-dom'
import EditarContenido from './admin/EditarContenido'
import SubirAlbum from './admin/SubirAlbum'
import AmpliacionFoto from './client/AmpliacionFoto'
import PosteosContenedor from './admin/posteos/PosteosContenedor'
import Login from './admin/Login'
import Admin from './admin/Admin'
import { connect } from 'react-redux'

const Contenedor = (props) => {
    let { url } = props
    useEffect(() => {

        fetch(`${url}/listarAlbums`, {
            method: "GET",
        }).then(r => r.json())
            .then(r => {
                props.dispatch({
                    type: "LISTAR_ALBUMS", payload: r
                });
                fetch(`${url}/listarDeportes`, {
                    method: "GET",
                }).then(r => r.json())
                    .then(r => {
                        props.dispatch({
                            type: "LISTAR_DEPORTES", payload: r
                        });

                    })

            })
    }, [])

    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/galeria" component={Galeria} />
                <Route exact path="/ampliacion" component={Ampliacion} />
                <Route exact path="/ampliacionFoto" component={AmpliacionFoto} />
                <Route exact path="/admin" component={Admin} />
                <Route exact path="/login" component={Login} />
                <Route path="/admin/actualizar" component={EditarContenido} />
                <Route path="/admin/subir" component={SubirAlbum} />
                <Route path="/admin/nuevoposteo" component={PosteosContenedor} />
            </Switch>
            {/*  <Navbar />
            <div className="w-10/12 mx-auto">
                <SociaVitalicia episodio={episodio} />
                <NuestraGaleria episodio={episodio} />
            </div> */}
            {/*   <Galeria /> */}
            {/*  <Admin /> */}


        </div>
    )
}
const mapStateToProps = (state) => ({
    url: state.url
})


export default connect(mapStateToProps)(Contenedor)