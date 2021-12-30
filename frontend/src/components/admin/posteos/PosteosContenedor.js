import React, { useState, useEffect } from 'react'
import { SelectField } from 'evergreen-ui'
import { connect } from 'react-redux'
import Imagen from './Imagen'
import SociaVitalicia from './form/SociaVitalicia'
import NavbarAdmin from '../NavbarAdmin'
import Input from '../../formComponents/Input'
import Noticias from './form/Noticias'
import ProximoPartido from './form/ProximoPartido'
import FinalPartido from './form/FinalPartido'


const PosteosContenedor = (props) => {

    const [tipoPosteo, setTipoPosteo] = useState("")

    let { url } = props;



    const armarForm = (e) => {
        console.log(e.target.value)
    }


    return (
        <div>
            <NavbarAdmin />
            <div className="w-screen overflow-hidden p-4  md:p-0 md:w-10/12 mx-auto pt-24 md:pt-48 w-10/12 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="col-span-1">
                        <div className="mb-6 col-span-1">
                            <Input type={"select"} label={"Tipo de Posteo"} funcion={setTipoPosteo} opciones={[{ "nombre": "Otro", "_id": "" }, { "nombre": "Socia Vitalicia", "_id": "socia" }, { "nombre": "Noticias", "_id": "noticias" }, { "nombre": "Próximo Partido", "_id": "proximoPartido" }, { "nombre": "Fin del Partido", "_id": "finalPartido" }]} />
                        </div>


                        {
                            (tipoPosteo === "socia") ?
                                <SociaVitalicia /> :
                                (tipoPosteo === "noticias") ?
                                    <Noticias /> :
                                    (tipoPosteo === "proximoPartido") ?
                                        <ProximoPartido /> :
                                        (tipoPosteo === "finalPartido") ?
                                            <FinalPartido /> :
                                            ""
                        }
                    </div>
                    <div className="col-span-1">
                        {
                            <Imagen tipo={tipoPosteo} />
                        }
                    </div>

                </div>
            </div >

        </div >
    )
}

const mapStateToProps = (state) => ({
    url: state.url
})



export default connect(mapStateToProps)(PosteosContenedor)