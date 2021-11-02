import React from 'react'
import Home from './client/Home'
import Galeria from './client/Galeria'
import Admin from './admin/Admin'
import Ampliacion from './client/Ampliacion'
import { Route, Switch } from 'react-router-dom'
import EditarContenido from './admin/EditarContenido'
import SubirAlbum from './admin/SubirAlbum'
import AmpliacionFoto from './client/AmpliacionFoto'
import Posteos from './admin/posteos/PosteosContenedor'
import PosteosContenedor from './admin/posteos/PosteosContenedor'




const Contenedor = () => {

    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/galeria" component={Galeria} />
                <Route exact path="/ampliacion" component={Ampliacion} />
                <Route exact path="/ampliacionFoto" component={AmpliacionFoto} />
                <Route exact path="/admin" component={Admin} />
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

export default Contenedor
