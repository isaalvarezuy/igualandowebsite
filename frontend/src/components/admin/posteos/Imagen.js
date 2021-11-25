import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import domtoimage from 'dom-to-image';
import SociaVitalicia from './posteos/SociaVitalicia';

const Imagen = (props) => {

    let tipo = props.tipo;
    let preview;
    let screenHeight;

    useEffect(() => {
        domtoimage.toJpeg(document.getElementById('capture'), { quality: 0.95 }).then(
            function (dataUrl) {
                preview = dataUrl;
                /*     console.log(dataUrl) */
                document.getElementById("preview").src = preview;

            }
        )
    }
    )
    /*  const cropView = () => {
         let previewHeight = document.getElementById('preview').offsetHeight;
         var div = document.querySelector('#contenedorImg');
         div.style.height = `${previewHeight + 70}px`;
     } */
    const descargarImg = () => {
        domtoimage.toJpeg(document.getElementById('capture'), { quality: 0.95 })
            .then(function (dataUrl) {
                /*  console.log(dataUrl) */
                var link = document.createElement('a');
                link.download = `${tipo}.jpeg`;
                link.href = dataUrl;
                link.click();
            });
    }


    return (
        <div id="contenedorImg" style={{ overflow: "hidden" }}>
            <img className="w-full md:w-10/12 mx-auto" id="preview" src={preview} />
            <div className="w-full md:w-10/12 mx-auto pt-4">
                <button className="btn w-full md:w-auto  bg-orange py-2 px-4 rounded-3xl text-white text-base" id="btn-download" download="post.jpg" onClick={descargarImg}>Descargar </button>
            </div>
            <div style={{ position: "fixed", top: 0, left: 0, width: "1080px", height: "1080px", position: "relative" }}>
                <div id="capture" style={{ width: "1080px", height: "1080px", position: "absolute", top: "0" }}>
                    {(tipo === "socia") ?
                        <SociaVitalicia /> :
                        <div></div>}
                </div>
                <div id="capture" style={{ position: "fixed", top: 0, left: 0, width: "1080px", height: "1080px", position: "absolute", backgroundColor: "white" }}>

                </div>
            </div>



        </div>
    )
}


const mapStateToProps = (state) => ({

    sociaVitalicia: state.sociaVitalicia

})


export default connect(mapStateToProps)(Imagen)