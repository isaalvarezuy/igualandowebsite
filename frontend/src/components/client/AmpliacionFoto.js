import React, { useState, useEffect } from 'react'

const AmpliacionFoto = (props) => {

    console.log(props)
    let fotoActual = props.location.aboutProps.fotoActual;
    let fotos = props.location.aboutProps.fotos;
    console.log(fotos)
    const [posActual, setPosActual] = useState(0)


    /* saber que foto se amplio */
    useEffect(() => {

        for (let i = 0; i < fotos.length; i++) {
            if (fotoActual === fotos[i].source) {
                console.log(i)
                setPosActual(i)
            }
        }

    }, [])

    return (
        <div>
            <p onClick={() => { (posActual > 0) ? setPosActual(posActual - 1) : setPosActual(fotos.length - 1) }}>anterior</p>
            <img alt="Foto del partido" src={fotos[posActual].source} />
            <p onClick={() => { (posActual !== fotos.length - 1) ? setPosActual(posActual + 1) : setPosActual(0) }}>siguiente</p>
        </div>
    )
}

export default AmpliacionFoto
