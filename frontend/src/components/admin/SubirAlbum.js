import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import Axios from 'axios'
import NavbarAdmin from './NavbarAdmin';
import Input from '../formComponents/Input'
import Tabla from './Tabla'
import Popup from './posteos/Popup'
import Alerta from './Alerta'

const SubirAlbum = (props) => {

    useEffect(() => {
        setDeporte(deportes[0].id)
    }, [])

    const [visible, setVisible] = useState(0)
    const [tipoMensaje, setTipoMensaje] = useState(0)
    let { albums, deportes, url } = props;
    const [selectedFile, setSelectedFile] = useState([]);
    const [titulo, setTitulo] = useState("");
    const [deporte, setDeporte] = useState("");
    const [fecha, setFecha] = useState("");
    const [mensaje, setMensaje] = useState("")
    const [popup, setPopup] = useState(false)
    const [albumElegidoId, setAlbumElegidoId] = useState("")
    const [albumElegidoNombre, setAlbumElegidoNombre] = useState("")

    useEffect(() => {
        if (titulo !== "" && deporte !== "" && fecha !== "" && selectedFile !== "") {
            document.getElementById("btn-upload").disabled = false;
            document.getElementById("btn-upload").style.opacity = "1";
        } else {
            document.getElementById("btn-upload").disabled = true;
            document.getElementById("btn-upload").style.opacity = "0.7";
        }
    }, [titulo, deporte, fecha, selectedFile])


    const guardarFecha = (e) => {
        console.log(e)
        let aux = new Date(`${e} GMT-3`);
        setFecha(aux);
    }

    const borrarAlbum = (recibido) => {
        let idBorrar = recibido.target.dataset.id;
        fetch(`${url}/eliminarAlbum`, {
            method: "DELETE",
            body: JSON.stringify({ idBorrar: idBorrar }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(r => r.json())
            .then(album => {
                console.log(album);
                props.dispatch({ type: "ELIMINAR_ALBUM", payload: album });
                cerrarPopup();
                setMensaje("Album eliminado con éxito")
                setTipoMensaje("exito")
                setVisible(1)

            })
    }

    const abrirPopup = (recibido) => {
        console.log(recibido.target.dataset)
        setAlbumElegidoId(recibido.target.dataset.id)
        setAlbumElegidoNombre(recibido.target.dataset.titulo)
        setPopup(true)
    }

    const cerrarPopup = () => {
        setPopup(false)
    }

    const crearAlbum = async () => {
        console.log(selectedFile)
        const fotos = await uploadImages()
        console.log(fotos)

        let nuevoAlbum = {
            titulo: titulo,
            deporte: deporte,
            fecha: fecha,
            fotos: fotos
        }


        fetch(`${url}/crearAlbum`, {
            method: "POST",
            body: JSON.stringify(nuevoAlbum),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(r => r.json())
            .then(r => {
                console.log(r);
                props.dispatch({ type: "AGREGAR_ALBUM", payload: r });
                setMensaje("Álbum subido con éxito")
                setTipoMensaje("exito")
                setVisible(1)

            })

    }


    const uploadImages = () => {
        setMensaje("Subiendo fotos...")
        setTipoMensaje("loading")
        setVisible(1)
        const fotos = selectedFile.map(file => {
            const formData = new FormData()
            formData.append("file", file);
            formData.append("upload_preset", "igualando")
            return Axios.post(
                "https://api.cloudinary.com/v1_1/isita/image/upload",
                formData
            ).then((r) => {
                console.log(r)
                let foto = { source: r.data.url }
                return foto
            });
        });

        return Promise.all(fotos);
    }


    return (
        <div>
            <NavbarAdmin />
            {(popup !== false) ?
                < Popup className={`${popup}`} borrarAlbum={borrarAlbum} idBorrar={albumElegidoId} nombreBorrar={albumElegidoNombre} cerrarPopup={cerrarPopup} />
                : ""}


            <div className="w-full p-4  md:p-0 md:w-10/12 mx-auto pt-24 md:pt-48 w-10/12 mx-auto ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="col-span-1">
                        <h2 className="font-body font-semibold text-2xl mb-2" >Subir album</h2>
                        <Input type={"text"} label={"Título"} funcion={setTitulo} />


                        <Input type={"select"} opciones={deportes} funcion={setDeporte} label={"Deporte"} />

                        <Input type={"date"} label={"Fecha"} funcion={guardarFecha} />

                        <Input type={"multiple files"} label={"Subir fotos"} funcion={setSelectedFile} />

                        <button id="btn-upload" className="btn block bg-orange py-2 px-4 rounded-3xl text-white text-base mt-4 " onClick={crearAlbum}>Subir Album</button>

                    </div>
                    <div className="col-span-1">
                        <h2 className="font-body font-semibold text-2xl mb-2" >Albumes</h2>

                        <Tabla abrirPopup={abrirPopup} albums={albums} />
                    </div>
                </div>
            </div>
            <Alerta tipo={tipoMensaje} mensaje={mensaje} visible={visible} funcion={setVisible} />
        </div >
    )
}
const mapStateToProps = (state) => ({
    albums: state.albums,
    deportes: state.deportes,
    url: state.url

})


export default connect(mapStateToProps)(SubirAlbum)