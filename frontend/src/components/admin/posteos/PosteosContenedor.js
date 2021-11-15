import React, { useState } from 'react'
import { SelectField } from 'evergreen-ui'
import { connect } from 'react-redux'
import Imagen from './Imagen'
import SociaVitalicia from './form/SociaVitalicia'
import NavbarAdmin from '../NavbarAdmin'

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
            <NavbarAdmin />
            <div className="w-screen overflow-hidden p-4  md:p-0 md:w-10/12 mx-auto pt-24 md:pt-48 w-10/12 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="col-span-1">
                        <SelectField onChange={armarForm}
                            required
                            label="Tipo de posteo"
                        > <option value="otro">otro</option>
                            <option value="socia">Socia Vitalicia</option>
                            <option value="bar">Bar</option>
                        </SelectField>
                        {
                            (tipoPosteo === "socia") ?
                                <SociaVitalicia /> :
                                <div></div>
                        }
                    </div>
                    <div className="col-span-1">
                        {(tipoPosteo === "socia") ?
                            <Imagen tipo="socia" /> :
                            <div></div>}
                    </div>
                </div>
            </div >
        </div>
    )
}

const mapStateToProps = (state) => ({

})



export default connect(mapStateToProps)(PosteosContenedor)