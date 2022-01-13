import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Input from '../../../formComponents/Input'
import Switch from '../../../formComponents/Switch'

export const FormIntegranteStory = (props) => {

    let { usuarios } = props

    const [usuariosSelect, setUsuariosSelect] = useState([])
    let integrante;
    let darkMode = false;

    let guardarDatos = (integrante, darkMode) => {
        props.dispatch({
            type: "STORY_EQUIPO", payload: { "integrante": integrante, "darkMode": darkMode }
        });
    }

    const guardarIntegrante = (recibido) => {
        integrante = recibido
        guardarDatos(integrante, darkMode)
    }

    const guardarDarkMode = (recibido) => {
        darkMode = recibido
        guardarDatos(integrante, darkMode)
    }



    useEffect(() => {

        if (usuarios !== "") {
            let aux = usuarios.map((u, i) => {
                let newUser = {};
                newUser = { nombre: u.nombreCompleto, _id: u._id, key: u._id }
                return newUser
            })
            console.log(aux)
            setUsuariosSelect(aux)
        }
    }, [usuarios])

    return (

        <div>
            <Input type={"select"} label={"Integrante"} defaultValue={"Elegí un integrante"} opciones={usuariosSelect} funcion={guardarIntegrante} />
            <Switch funcion={guardarDarkMode} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    usuarios: state.usuarios,
})



export default connect(mapStateToProps)(FormIntegranteStory)
