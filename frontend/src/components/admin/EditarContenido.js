import React, { useState, useEffect } from 'react'

export default function EditarContenido() {

    useEffect(() => {

        fetch('http://localhost:3001/traerDatos', {
            method: "GET",
        }).then(r => r.json())
            .then(r => {
                /*  console.log(r); */
                setProgramas(r[0].programas)
                setSocias(r[0].socias)
                setPartidos(r[0].partidos)
            })

    }, [])


    const [programas, setProgramas] = useState();
    const [socias, setSocias] = useState()
    const [partidos, setPartidos] = useState()

    const guardarCambios = () => {

        let nuevosDatos = {
            programas: programas,
            socias: socias,
            partidos: partidos,
        }

        console.log(nuevosDatos)

        fetch('http://localhost:3001/modificarDatos', {
            method: "PUT",
            body: JSON.stringify(nuevosDatos),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(r => r.json())
            .then(r => {
                console.log(r);
            })
    }

    return (
        <div>
            Programas al aire
            <input className="border ml-4 my-4" type="number" defaultValue={programas} placeholder={programas} onChange={(e) => {
                setProgramas(parseInt(e.target.value))
            }} /> <br />

            Socias Vitalicias
            <input className="border ml-4 my-4" type="number" defaultValue={socias} placeholder={socias} onChange={(e) => {
                setSocias(parseInt(e.target.value))
            }} /> <br />

           Partidos cubiertos
            <input className="border ml-4 my-4" type="number" defaultValue={partidos} placeholder={partidos} onChange={(e) => {
                setPartidos(parseInt(e.target.value))
            }} />
            <br />
            <button className="bg-orange py-3 px-8 rounded-3xl text-white text-base" onClick={guardarCambios}>Guardar cambios</button>
        </div>
    )
}
