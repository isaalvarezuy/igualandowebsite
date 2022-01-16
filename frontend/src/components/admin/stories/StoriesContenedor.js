import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import NavbarAdmin from '../NavbarAdmin'
import Programa from './form/Programa'
import ReactPlayer from 'react-player'
import Input from '../../formComponents/Input'
import IntegranteStory from './IntegranteStory'
import Switch from '../../formComponents/Switch'
import FormIntegranteStory from './form/FormIntegranteStory'
import FormFinalStory from './form/FormFinalStory'

const StoriesContenedor = (props) => {




    const [tipoPosteo, setTipoPosteo] = useState("")
    const [video, setVideo] = useState("")

    useEffect(() => {
        setTipoPosteo("equipo")
    }, [])
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
                            <Input type={"select"} label={"Tipo de Story"} funcion={setTipoPosteo} opciones={[{ "nombre": "Conocé al equipo", "_id": "equipo" }, { "nombre": "Próximo Programa", "_id": "programa" }, { "nombre": "Final del Partido", "_id": "storyFinal" }]} />
                        </div>
                        {
                            (tipoPosteo === "programa") ?
                                <Programa funcion={setVideo} /> :
                                (tipoPosteo === "equipo") ?
                                    <FormIntegranteStory />
                                    : (tipoPosteo === "storyFinal") ?
                                        <FormFinalStory funcion={setVideo} /> : ""
                        }


                    </div>
                    <div className="col-span-1">
                        {(tipoPosteo === "programa" || tipoPosteo === "storyFinal") ?
                            <ReactPlayer playing={true} volume={0} height="500px" loop={true} url={video} className="mx-auto" /> :
                            (tipoPosteo === "equipo") ?
                                <div>
                                    <IntegranteStory />
                                </div> : ""}

                    </div>

                </div>
            </div >
        </div>
    )
}

const mapStateToProps = (state) => ({
    url: state.url,
    usuarios: state.usuarios
})



export default connect(mapStateToProps)(StoriesContenedor)