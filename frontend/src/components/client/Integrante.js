import React from 'react'


const Integrante = (props) => {
    let integrante = props.integrante;
    return (
        <div key={integrante.foto1x} className="flex flex-col justify-center py-4 md:py-8 md:pb-24">
            <div style={{ width: "169px", height: "169px", background: `url(${integrante.foto}) center center/cover` }} className="mx-auto"></div>
            <p className="font-body text-center font-semibold text-2xl">{integrante.nombre}</p>
            <p className="font-body text-center text-base">{integrante.rol}</p>
            <p className="font-body text-center italic">{integrante.chiste}</p>
        </div >
    )
}


export default (Integrante)
