import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import domtoimage from 'dom-to-image';
import SociaVitalicia from './posteos/SociaVitalicia';

import screenshot from 'image-screenshot'

const Imagen = (props) => {

    let tipo = props.tipo;

    const descargarImg = () => {
        domtoimage.toJpeg(document.getElementById('capture'), { quality: 0.95 })
            .then(function (dataUrl) {
                var link = document.createElement('a');
                link.download = `${tipo}.jpeg`;
                link.href = dataUrl;
                link.click();
            });
    }

    return (
        <div>
            <div id="capture">
                {(tipo === "socia") ?

                    <SociaVitalicia /> :
                    <hr />}


            </div>
            <button id="btn-download" download="post.jpg" onClick={descargarImg}>Boton </button>
        </div>
    )
}


const mapStateToProps = (state) => ({

    sociaVitalicia: state.sociaVitalicia

})


export default connect(mapStateToProps)(Imagen)