import React, { useState } from 'react'
import { connect } from 'react-redux'
import Imagen from './Imagen'
import SociaVitalicia from './form/SociaVitalicia'

const PosteosContenedor = (props) => {

    const [tipoPosteo, setTipoPosteo] = useState("")

    const armarForm = (e) => {
        setTipoPosteo(e.target.value)
    }

    /* useEffect(() => {

        fetch('http://localhost:3001/listarEquipos', {
            method: 'GET',
        }).then(r => r.json())
            .then(equipos => {
                console.log(equipos)
                props.dispatch({ type: "LISTAR_EQUIPOS", payload: equipos });
                props.dispatch({ type: "VER" });
            })         
    }) */
    return (
        <div>
            {/*  <Upload /> */}
            <select onChange={armarForm}>
                <option disabled>Elegir tipo de posteo</option>
                <option value="socia">Socia Vitalicia</option>
                <option value="otro">otro</option>
            </select>
            {(tipoPosteo === "socia") ?
                <div>
                    <SociaVitalicia />
                    <Imagen tipo="socia" /></div> :
                <hr></hr>

            }

        </div>
    )
}

const mapStateToProps = (state) => ({

})



export default connect(mapStateToProps)(PosteosContenedor)