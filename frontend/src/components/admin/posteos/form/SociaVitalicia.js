import React, { useState } from 'react'
import { connect } from 'react-redux'
import { TextInputField, FilePicker, Pane, Label, Textarea } from 'evergreen-ui'

const SociaVitalicia = (props) => {

    let fondo = "";
    let main = "";
    let nombre = "";
    let spCode = "";
    let profesion = "";
    let fecha = "";
    let frase = "";

    let guardarDatos = (fondo, main, nombre, profesion, fecha, spCode, frase) => {
        props.dispatch({
            type: "SOCIA_VITALICIA", payload: { "fotoFondo": fondo, "fotoMain": main, "nombre": nombre, "profesion": profesion, "fecha": fecha, "spCode": spCode, "frase": frase }
        });
    }

    let guardarFotoFondo = (e) => {
        const file = e[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            fondo = reader.result
            guardarDatos(fondo, main, nombre, profesion, fecha, spCode, frase);
        }

    }

    let guardarFotoMain = (e) => {
        console.log(e)
        console.log(e[0]);
        const file = e[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            main = reader.result
            guardarDatos(fondo, main, nombre, profesion, fecha, spCode, frase);
        }



    }

    let guardarSpCode = (e) => {
        const file = e[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            spCode = reader.result;
            guardarDatos(fondo, main, nombre, profesion, fecha, spCode, frase);
        }
    }

    let guardarNombre = (e) => {
        nombre = e.target.value;
        guardarDatos(fondo, main, nombre, profesion, fecha, spCode, frase);

    }

    let guardarProfesion = (e) => {
        profesion = e.target.value;
        guardarDatos(fondo, main, nombre, profesion, fecha, spCode, frase);
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

        fecha = `${dia}.${mes}.${anio}`
        guardarDatos(fondo, main, nombre, profesion, fecha, spCode, frase);
    }

    let guardarFrase = (e) => {
        frase = e.target.value;
        guardarDatos(fondo, main, nombre, profesion, fecha, spCode, frase);
    }

    return (
        <div>

            <TextInputField
                label="Nombre"
                required
                placeholder="Nombre de la socia"
                onChange={guardarNombre}
            />

            <TextInputField
                label="Profesión"
                required
                placeholder="Profesión"
                onChange={guardarProfesion}
            />




            <label> Fecha
                <input type="date" onChange={guardarFecha} />
            </label>

            <FilePicker className="pt-2"

                onChange={guardarFotoFondo}
                placeholder="Foto de fondo"
            />
            <FilePicker className="pt-4"
                onChange={guardarFotoMain}
                placeholder="Foto principal"
            />
            <FilePicker className="pt-4"
                onChange={guardarSpCode}
                placeholder="Código de Spotify"
            />
            <Pane className="pt-4" onChange={guardarFrase}>
                <Label htmlFor="textarea-2" marginBottom={4} display="block">
                    Frase </Label>
                <Textarea id="textarea-2" placeholder="Ingresar frase.." />
            </Pane>


            <button className="btn block bg-orange py-2 px-4 rounded-3xl text-white text-base" onClick={guardarDatos(fondo, main, nombre, profesion, fecha, spCode, frase)}>Submit</button>



        </div>
    )
}

const mapStateToProps = (state) => ({

})


export default connect(mapStateToProps)(SociaVitalicia)