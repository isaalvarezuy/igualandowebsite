import React from 'react'
import { connect } from 'react-redux'
import Integrante from './Integrante'

export const Quienes = (props) => {
    let integrantes = props.integrantes
    return (
        <div className="w-full md:w-10/12 mx-auto">
            <div className="grid grid-cols-1  p-4 md:grid-cols-12 md:p-0">
                <div className="self-center col-span-1 md:col-span-6">
                    <h2 className="md:py-4 md:p-0 font-title text-5.5xl md:text-hero relative">¿Quiénes somos?
                    <svg className="absolute bottom-2 md:bottom-6 right-0" xmlns="http://www.w3.org/2000/svg" width="118" height="24" viewBox="0 0 118 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M113.642 16.5005L106.571 23.5716L102.328 19.3289L109.399 12.2579L102.328 5.18678L106.571 0.944142L113.642 8.01521L117.885 12.2579L113.642 16.5005Z" fill="#F06F46" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M88.0857 16.5005L81.0147 23.5716L76.772 19.3289L83.8431 12.2579L76.772 5.18678L81.0147 0.944142L88.0857 8.01522L92.3284 12.2579L88.0857 16.5005Z" fill="#F06F46" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M62.5293 16.5005L55.4583 23.5716L51.2156 19.3289L58.2867 12.2579L51.2156 5.18678L55.4583 0.944142L62.5293 8.01522L66.772 12.2579L62.5293 16.5005Z" fill="#F06F46" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M36.9732 16.5005L29.9021 23.5716L25.6595 19.3289L32.7305 12.2579L25.6595 5.18678L29.9021 0.944142L36.9732 8.01522L41.2158 12.2579L36.9732 16.5005Z" fill="#F06F46" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M11.4168 16.5005L4.34572 23.5716L0.103075 19.3289L7.17415 12.2579L0.103075 5.18678L4.34572 0.944143L11.4168 8.01522L15.6594 12.2579L11.4168 16.5005Z" fill="#F06F46" />
                        </svg>
                    </h2>
                </div>
                <div className="self-center col-span-1 md:col-start-5 md:col-span-7">
                    <p className="font-body text-base mb-4 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper diam morbi purus, eget sit. Ultricies urna sed ultricies amet pharetra. Adipiscing morbi nunc, neque, lectus. Varius consectetur dignissim tortor adipiscing egestas dignissim quis.</p>
                </div>
                <div className="col-span-1 md:col-span-12 flex flex-col md:flex-row md:justify-around">
                    {integrantes.map(i => <Integrante integrante={i} />)}
                </div>
            </div>

        </div>
    )
}

const mapStateToProps = (state) => ({
    integrantes: state.integrantes
})

export default connect(mapStateToProps)(Quienes)
