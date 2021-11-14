import React, { useState, useEffect } from 'react'
import { ArrowLeftIcon, ArrowRightIcon } from 'evergreen-ui'

const AmpliacionFoto = (props) => {

    console.log(props)
    let fotoActual = props.fotoActual
    let fotos = props.fotos
    const [posActual, setPosActual] = useState(0)


    /* saber que foto se amplio */
    useEffect(() => {

        for (let i = 0; i < fotos.length; i++) {
            if (fotoActual === fotos[i].source
            ) {
                console.log(i)
                setPosActual(i)
            }
        }

    }, [])

    return (
        <div className="h-full w-full fixed top-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
            <ArrowLeftIcon color="white" onClick={() => { (posActual > 0) ? setPosActual(posActual - 1) : setPosActual(fotos.length - 1) }} />
            <img className=" mx-12 w-1/2 " alt="Foto del partido" src={fotos[posActual].source} />
            <ArrowRightIcon color="white" onClick={() => { (posActual !== fotos.length - 1) ? setPosActual(posActual + 1) : setPosActual(0) }} />
        </div>
    )
}

export default AmpliacionFoto
