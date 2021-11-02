import React from 'react';
import SociaVitalicia from './SociaVitalicia'
import NuestraGaleria from './NuestraGaleria'
import Navbar from './Navbar'
import Stats from './Stats'

export default function Home() {
    return (
        <div>
            <Navbar />
            <div className="h-100" ></div>
            <Stats />
            <SociaVitalicia />
            <NuestraGaleria />
        </div >
    )
}
