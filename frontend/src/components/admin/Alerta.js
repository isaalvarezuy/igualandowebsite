import React, { useState, useEffect } from 'react'


const Alerta = (props) => {

    let { mensaje, tipo, visible } = props
    const [error, setError] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            props.funcion(0)
        }, 2000);
        return () => clearTimeout(timer);
    }, [visible]);

    return (
        <div className="duration-500 fixed  bottom-8 mx-auto" style={{ width: '400px', left: 'calc(50% - 200px)', opacity: `${visible}` }}>
            {(tipo === "error") ?
                <div className="rounded-md shadow-sm bg-red-500 w-full p-4 w-10/12 flex flex-row items-center ">

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className="ml-3 w-full">
                        <p className="text-sm font-medium text-white ">{mensaje}</p>
                    </div>
                    <button onClick={() => props.funcion(0)} className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg></button>

                </div> :
                <div className="rounded-md shadow-sm bg-green-50 w-full p-4 w-10/12 flex flex-row items-center ">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-green-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className="ml-3 w-full">
                        <p className="text-sm font-medium text-green-800 ">{mensaje}</p>
                    </div>
                    <button className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg></button>
                </div>
            }


        </div>

    )
}

export default Alerta
