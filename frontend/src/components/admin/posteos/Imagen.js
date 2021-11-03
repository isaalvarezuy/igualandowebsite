import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import domtoimage from 'dom-to-image';
import SociaVitalicia from './posteos/SociaVitalicia';

import screenshot from 'image-screenshot'

const Imagen = (props) => {

    let tipo = props.tipo;
    let preview;

    useEffect(() => {
        domtoimage.toJpeg(document.getElementById('capture'), { quality: 0.95 }).then(
            function (dataUrl) {
                preview = dataUrl;
                console.log(dataUrl)
                document.getElementById("preview").src = preview;
            }
        )
    })
    const descargarImg = () => {
        domtoimage.toJpeg(document.getElementById('capture'), { quality: 0.95 })
            .then(function (dataUrl) {
                console.log(dataUrl)
                var link = document.createElement('a');
                link.download = `${tipo}.jpeg`;
                link.href = dataUrl;
                link.click();
            });
    }

    return (
        <div>
            <img className="w-10/12 mx-auto" id="preview" src={preview} />
            <div style={{ width: "1080px", height: "1080px", position: "relative" }}>
                <div id="capture" style={{ width: "1080px", height: "1080px", position: "absolute", }}>
                    {(tipo === "socia") ?
                        <SociaVitalicia /> :
                        <div></div>}
                </div>
                <div id="capture" style={{ width: "1080px", height: "1080px", position: "absolute", backgroundColor: "white" }}>

                </div>
            </div>


            <button id="btn-download" download="post.jpg" onClick={descargarImg}>Boton </button>
        </div>
    )
}


const mapStateToProps = (state) => ({

    sociaVitalicia: state.sociaVitalicia

})


export default connect(mapStateToProps)(Imagen)