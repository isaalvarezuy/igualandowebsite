import React, { useState } from 'react'
import { connect } from 'react-redux'
import Integrante from './Integrante'
import TitleArrowLottie from '../lotties/TitleArrowLottie'
import { Waypoint } from 'react-waypoint'

export const Quienes = (props) => {

    let integrantes = props.integrantes
    let [renderLottie, setRenderLottie] = useState(false);



    return (
        <div className="w-full md:w-10/12 mx-auto md:pt-4">
            <div className="grid grid-cols-1  p-4 md:grid-cols-12 md:p-0">
                <div className="self-center col-span-1 md:col-span-6">


                    <h2 className="py-4 md:p-0 font-title text-5.5xl md:text-hero relative">¿Quiénes somos?
                  
                        <div className="absolute bottom-6 md:bottom-6 right-8 md:left-96" style={{ width: '118px' }}> {renderLottie && <TitleArrowLottie />}</div>
                        
                    </h2>
                </div>
                <div className="self-center col-span-1 md:col-start-5 md:col-span-7">

                    <p className="font-body text-base mb-4 ">
                        Igualando la Cancha nace de la iniciativa de cinco estudiantes de Comunicación con el fin de <b>lograr una mayor difusión del deporte femenino a través del periodismo.</b>
                        Somos el primer medio dedicado 100% a los deportes femeninos: incluyendo basketball, futbol, handball, volleyball, hockey y rugby.

                        </p>
                    <Waypoint onEnter={() => setRenderLottie(true)} />
                </div>
                <div className="col-span-1 md:col-span-12 flex flex-col md:flex-row md:justify-around">
                    {integrantes.map(i => <Integrante key={i.foto} integrante={i} />)}
                </div>
            </div>

        </div>
    )
}

const mapStateToProps = (state) => ({
    integrantes: state.integrantes
})

export default connect(mapStateToProps)(Quienes)
