import { useState, useEffect } from 'react'
import { interpolate, useCurrentFrame } from "remotion";
import './MyComp.css'

export const MyComp = ({ nombre }) => {

    useEffect(() => {
        setTemasHeight(document.getElementsByClassName('temas').clientHeight)
    }, [])

    const [temasHeight, setTemasHeight] = useState(0)

    const frame = useCurrentFrame();

    const opacity = interpolate(frame, [0, 20], [0, 1], {
        extrapolateRight: "clamp",
    });
    const positionTop = interpolate(frame, [0, 300], [0, -380])
    const positionBottom = interpolate(frame, [0, 300], [0, -1110])

    const opacity1 = interpolate(frame, [0, 10, 20, 30], [0, 1, 1, 0])
    const opacity2 = interpolate(frame, [5, 15, 25, 35], [0, 1, 1, 0])
    const opacity3 = interpolate(frame, [10, 20, 30, 40], [0, 1, 1, 0])
    const opacity4 = interpolate(frame, [15, 25, 35, 45], [0, 1, 1, 0])
    const opacity5 = interpolate(frame, [20, 30, 40, 50], [0, 1, 1, 0])
    const opacity6 = interpolate(frame, [25, 35, 45, 55], [0, 1, 1, 0])
    const opacity7 = interpolate(frame, [30, 40, 50, 60], [0, 1, 1, 0])


    const size1 = interpolate(frame, [0, 80, 81, 85], [90, 90, 190, 190], {
        extrapolateRight: "clamp",
    })

    const oPrendete = interpolate(frame, [0, 65, 66, 100, 101], [0, 0, 1, 1, 0])
    const oFecha = interpolate(frame, [0, 70, 71], [0, 0, 0])

    /* const oTema1 = interpolate(frame, [0, 120, 121], [0, 0, 1,], {
        extrapolateRight: "clamp",
    }); */
    const oTema2 = interpolate(frame, [0, 140, 141], [0, 0, 1,], {
        extrapolateRight: "clamp",
    });
    const oTema3 = interpolate(frame, [0, 160, 161], [0, 0, 1,], {
        extrapolateRight: "clamp",
    });

    const pTema1 = interpolate(frame, [0, 150, 300], [1000, 1000, -800], {
        extrapolateRight: "clamp",
    });


    const lHablamos = interpolate(frame, [0, 65, 160], [-1000, -1000, 1100], {
        extrapolateRight: "clamp",
    });


    return (

        <div className="bg-black w-full">
            <div style={{ width: '2280px', left: positionTop }} className="banda bg-orange p-4 text-4xl absolute left-0">
                <span className="font-body font-semibold">HORARIO CONFIRMADO - HORARIO CONFIRMADO - HORARIO CONFIRMADO - HORARIO CONFIRMADO - HORARIO CONFIRMADO  </span>
            </div>
            <div className="videoContainer pt-64 relative">
                <div className="flickerContainer w-full font-body font-semibold uppercase absolute">
                    <span style={{ opacity: opacity1 }} >Hay programa </span>
                    <span style={{ opacity: opacity2 }} >Hay programa  </span>
                    <span style={{ opacity: opacity3 }} >Hay programa  </span>
                    <span id="solid" style={{ opacity: opacity4, color: 'white' }} >Hay programa  </span>
                    <span style={{ opacity: opacity5 }} >Hay programa  </span>
                    <span style={{ opacity: opacity6 }} >Hay programa  </span>
                    <span style={{ opacity: opacity7 }} >Hay programa  </span>
                </div>
                <div className="prendeteContainer relative hidden" style={{ marginTop: '240px' }}>
                    <p className="absolute top-0 w-full" style={{ fontSize: `${size1}px`, opacity: oPrendete }}> Prendete </p>
                    <p className="absolute top-0  w-full" style={{ opacity: oFecha }} >el sabado</p>
                    <p className="absolute top-0  w-full" style={{ opacity: oFecha }}>a las ______ </p>
                </div>
                <div className="temas font-body font-semibold text-white text-left flex flex-col justify-center overflow-hidden relative" style={{ fontSize: '180px ', height: '1240px' }}>
                    <span id="temaUno" className="my-4 ab" style={{ whiteSpace: 'nowrap', width: 'fit-content', transform: `translateX(${pTema1}px)` }}>Fecha LFB</span>
                    <span className="my-4" style={{ opacity: oTema2, whiteSpace: 'nowrap', width: 'fit-content' }}>Libertadores Femenina</span>
                    <span className="my-4" style={{ opacity: oTema3, whiteSpace: 'nowrap', width: 'fit-content' }}>Nueva Socia Vitalicia</span>
                </div>
                {/* <div id="hablamosDe" className="font-title absolute top-24 text-orange" style={{ right: `${lHablamos}px` }}><span>HABLAMOS DE...</span></div> */}
            </div>


            <div style={{ width: '2240px', right: positionBottom, bottom: 0 }} className="banda bg-orange p-4 text-4xl absolute right-0">
                <span className="font-body font-semibold">HORARIO CONFIRMADO - HORARIO CONFIRMADO - HORARIO CONFIRMADO - HORARIO CONFIRMADO - HORARIO CONFIRMADO  </span>
            </div>
        </div >)
};