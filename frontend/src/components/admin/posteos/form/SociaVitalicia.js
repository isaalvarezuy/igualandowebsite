import React, { useState } from 'react'
import { connect } from 'react-redux'

const SociaVitalicia = (props) => {

    const [fotoFondo, setFotoFondo] = useState("")
    const [fotoMain, setFotoMain] = useState("")
    const [spCode, setSpCode] = useState("")
    const [nombre, setNombre] = useState("")
    const [profesion, setProfesion] = useState("")
    const [fecha, setFecha] = useState("")
    const [frase, setFrase] = useState("")

    let guardarDatos = () => {
        props.dispatch({
            type: "SOCIA_VITALICIA", payload: { "fotoFondo": fotoFondo, "fotoMain": fotoMain, "nombre": nombre, "profesion": profesion, "fecha": fecha, "spCode": spCode, "frase": frase }
        });
    }

    let guardarFotoFondo = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setFotoFondo(reader.result)
            /*  console.log(fotoFondo) */
        }
        /* 
                console.log("foto cargada") */
    }

    let guardarFotoMain = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setFotoMain(reader.result)
            /*  console.log(fotoFondo) */
        }
        /* 
                console.log("foto cargada") */
    }

    let guardarSpCode = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setSpCode(reader.result)
        }
    }

    let guardarNombre = (e) => {
        setNombre(e.target.value)
    }

    let guardarProfesion = (e) => {
        setProfesion(e.target.value)
    }
    let guardarFecha = (e) => {
        let aux = new Date(e.target.value);
        let dia = aux.getDate();
        if (dia < 10) {
            dia = `0${dia}`
        }
        let mes = aux.getMonth() + 1;
        if (mes < 10) {
            mes = `0${mes}`
        }
        let anio = aux.getFullYear();

        setFecha(`${dia}.${mes}.${anio}`)
    }

    let guardarFrase = (e) => {
        setFrase(e.target.value)
    }

    return (
        <div>

            <label> Nombre
                <input type="text" onChange={guardarNombre} />
            </label>

            <label> Profesión
                <input type="text" onChange={guardarProfesion} />
            </label>

            <label> Fecha
                <input type="date" onChange={guardarFecha} />
            </label>


            <p>Foto de fondo</p>
            <input type="file" onChange={guardarFotoFondo} />

            <p>Foto principal</p>
            <input type="file" onChange={guardarFotoMain} />

            <p>Codigo de Spotify</p>
            <input type="file" onChange={guardarSpCode} />

            <p>Frase </p>
            <textarea onChange={guardarFrase} />




            <button className="btn" onClick={guardarDatos}>Submit</button>



        </div>
    )
}

const mapStateToProps = (state) => ({

})


export default connect(mapStateToProps)(SociaVitalicia)