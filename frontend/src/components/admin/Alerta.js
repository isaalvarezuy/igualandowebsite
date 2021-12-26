import React from 'react'


const Alerta = (props) => {

    let { mensaje } = props

    return (
        <div className="fixed bottom-10 w-full flex justify-center">
            <div className="rounded-md bg-green-50 p-4 w-10/12 flex flex-row items-center ">
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

        </div>

    )
}

export default Alerta
