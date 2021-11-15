import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import SociaVitalicia from './SociaVitalicia'
import NuestraGaleria from './NuestraGaleria'
import Navbar from './Navbar'
import Stats from './Stats'
import Footer from './Footer';
import Quienes from './Quienes';
import Form from './Form';

const Home = (props) => {

    if (props.location.aboutProps !== undefined) {
        console.log(props)
        let clickeadoId = props.location.aboutProps.id;
        var clickeado = document.getElementById(clickeadoId);
        let y = clickeado.offsetTop;
        window.scrollTo(0, y)
    }


    return (
        <div>
            <Navbar />
            <div className="h-100" ></div>
            <div id="quienes" >
                <Quienes />
                <Stats />
            </div>
            <div id="sociasVitalicias">
                <SociaVitalicia />
            </div>
            <div id="galeria">
                <NuestraGaleria />
            </div>
            <div id="sumate">
                <Form />
            </div>
            <Footer />
        </div >
    )
}

const mapStateToProps = (state) => ({

})


export default connect(mapStateToProps)(Home)