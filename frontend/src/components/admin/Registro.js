import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Input from '../formComponents/Input'
import { removeBackgroundFromImageUrl } from "remove.bg";
import Axios from 'axios'
import domtoimage from 'dom-to-image';

export const Registro = (props) => {
    let { url, fondos } = props


    const [user, setUser] = useState("")
    const [nombreCompleto, setNombreCompleto] = useState("")
    const [rol, setRol] = useState("")
    const [apodo, setApodo] = useState("")
    const [explicacion, setExplicacion] = useState("")
    const [fondo, setFondo] = useState("")
    const [base64img, setBase64img] = useState("")
    const [avatar, setAvatar] = useState("")

    useEffect(() => {

        if (user !== "" && nombreCompleto !== "" && rol !== "" && apodo !== "" && explicacion !== "" && fondo !== "" && avatar !== "") {
            document.getElementById("btn-create").disabled = false;
            document.getElementById("btn-create").style.opacity = "1";
        } else {
            document.getElementById("btn-create").disabled = true;
            document.getElementById("btn-create").style.opacity = "0.7";
        }
    }, [user, nombreCompleto, rol, apodo, explicacion, fondo, avatar])

    const crearUsuario = () => {



        /*1. capturar imagen del div  */
        domtoimage.toJpeg(document.getElementById('avatar'), { quality: 0.95 })
            .then(function (dataUrl) {
                console.log(dataUrl)

                /*2. subir a cloudinary */
                const formData = new FormData;
                formData.append("file", dataUrl);
                formData.append("upload_preset", "fotosIntegrantes")
                Axios.post("https://api.cloudinary.com/v1_1/isita/image/upload", formData).then((r) => {
                    console.log(r.data.url)
                    setAvatar(r.data.url)
                })
            })

        /*  3. crear en db  */
        let userNuevo = {
            user: user,
            pass: "igualando",
            nombreCompleto: nombreCompleto,
            rol: rol,
            apodo: apodo,
            explicacion: explicacion,
            avatar: avatar
        }

        fetch(`${url}/insertar`, {
            method: "POST",
            body: JSON.stringify(userNuevo),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(r => r.json())
            .then(resp => {
                console.log(resp);
            })

    }

    let subirFoto = (recibido) => {
        const file = recibido.target.files[0];
        const formData = new FormData;
        formData.append("file", file);
        formData.append("upload_preset", "fotosIntegrantes")

        Axios.post("https://api.cloudinary.com/v1_1/isita/image/upload", formData).then((r) => {
            console.log(r.data.url)
            borrarFondo(r.data.url)
        })
    }

    const borrarFondo = (imgUrl) => {
        return new Promise((resolve, reject) => {

            const url = imgUrl;
            removeBackgroundFromImageUrl({
                url,
                apiKey: "BeFtvtA1dedPNPn6R2PrbZN3",
                size: "regular",
                type: "person",
            }).then((result) => {
                setBase64img(result.base64img)


            }).catch((err) => {
                console.log(JSON.stringify(err));
            });
        })

    }

    return (
        <div className="w-full p-4  md:p-0 md:w-10/12 mx-auto pt-24 md:pt-48 w-10/12 mx-auto ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="col-span-1">
                    <Input type={"text"} label={"Nombre de Usuario"} funcion={setUser} />
                    <Input type={"text"} label={"Nombre Completo"} funcion={setNombreCompleto} />
                    <Input type={"text"} label={"Rol"} funcion={setRol} />
                    <Input type={"text"} label={"Apodo"} funcion={setApodo} />
                    <Input type={"textarea"} label={"Explicación"} funcion={setExplicacion} />

                    <p className="font-body text-md">Elegí un fondo para el avatar</p>
                    <div className="flex mb-4">

                        {fondos.map(fondo => <img className="imgFondo " onClick={(e) => {
                            let imagenes = document.getElementsByClassName("imgFondo");
                            for (let i = 0; i < imagenes.length; i++) {
                                imagenes[i].classList.remove("border-orange");
                                imagenes[i].classList.remove("border-2");
                            }
                            e.target.classList.add("border-orange")
                            e.target.classList.add("border-2")
                            setFondo(e.target.src)
                        }} style={{ width: '80px', height: '80px', margin: '10px', borderRadius: '100%' }} key={fondo.id} data-id={fondo.id} src={fondo.src} />)}
                    </div>
                    <Input type={"file"} label={"Foto del Avatar"} funcion={subirFoto} />
                    <button className=" w-full md:w-auto  bg-orange py-2 px-4 rounded-3xl text-white text-base" id="btn-create" onClick={crearUsuario}>Crear usuario </button>


                </div>
                <div className="col-span-1">
                    <div id="avatar" style={{ width: '400px', height: '400px', borderRadius: '100%', background: `url(${fondo}) center center /cover` }}>
                        <div style={{ width: '400px', height: '400px', borderRadius: '100%', background: `url(data:image/png;base64,${base64img}) center center/contain no-repeat` }}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    url: state.url,
    fondos: state.fondos,
    fotoSinFondo: state.fotoSinFondo

})


export default connect(mapStateToProps)(Registro)
