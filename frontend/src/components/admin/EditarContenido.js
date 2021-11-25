import React, { useState, useEffect } from 'react'
import NavbarAdmin from './NavbarAdmin'
import { TextInputField } from 'evergreen-ui'
import Input from './posteos/Input'

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
            <NavbarAdmin />
            <div className="w-full p-4  md:p-0 md:w-10/12 mx-auto pt-24 md:pt-48"  >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">

                    <div className="col-span-1">
                        <Input type={"number"} label={"Programas al aire"} defaultValue={programas} funcion={setProgramas} />
                        <Input type={"number"} label={"Socias Vitalicia"} defaultValue={socias} funcion={setSocias} />
                        <Input type={"number"} label={"Partidos cubiertos"} defaultValue={partidos} funcion={setPartidos} />
                        <button className="w-full md:w-auto bg-orange py-3 px-8 rounded-3xl text-white text-base" onClick={guardarCambios}>Guardar cambios</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
