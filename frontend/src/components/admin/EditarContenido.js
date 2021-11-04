import React, { useState, useEffect } from 'react'
import NavbarAdmin from './NavbarAdmin'
import { TextInputField } from 'evergreen-ui'

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
            <div className="w-10/12 mx-auto pt-48">
                <div className="grid grid-cols-2 gap-12">

                    <div className="col-span-1">
                        <TextInputField
                            label="Programas al aire"
                            required
                            placeholder={programas}
                            defaultValue={programas}
                            onChange={(e) => {
                                setProgramas(parseInt(e.target.value))
                            }}
                        />
                        <TextInputField
                            label=" Socias Vitalicias"
                            required
                            placeholder={socias}
                            defaultValue={socias}
                            onChange={(e) => {
                                setSocias(parseInt(e.target.value))
                            }}
                        />
                        <TextInputField
                            label="Partidos cubiertos"
                            required
                            placeholder={partidos}
                            defaultValue={partidos}
                            onChange={(e) => {
                                setPartidos(parseInt(e.target.value))
                            }}
                        />


                        <br />
                        <button className="bg-orange py-3 px-8 rounded-3xl text-white text-base" onClick={guardarCambios}>Guardar cambios</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
