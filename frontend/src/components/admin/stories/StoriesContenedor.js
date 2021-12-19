import React, { useState } from 'react'
import { connect } from 'react-redux'
import NavbarAdmin from '../NavbarAdmin'
import Programa from './form/Programa'
import ReactPlayer from 'react-player'
import Input from '../../formComponents/Input'

const StoriesContenedor = (props) => {

    const [tipoPosteo, setTipoPosteo] = useState("")
    const [video, setVideo] = useState("")

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
                            <Input type={"select"} label={"Tipo de Story"} funcion={setTipoPosteo} opciones={[{ "nombre": "Otro", "_id": "" }, { "nombre": "Próximo Programa", "_id": "programa" }]} />
                        </div>
                        {
                            (tipoPosteo === "programa") ?
                                <Programa funcion={setVideo} /> :
                                <div></div>
                        }


                    </div>
                    <div className="col-span-1">
                        <ReactPlayer playing={true} volume={0} height="500px" loop={true} url={video} className="mx-auto" />
                    </div>

                </div>
            </div >
        </div>
    )
}

const mapStateToProps = (state) => ({
    url: state.url
})



export default connect(mapStateToProps)(StoriesContenedor)