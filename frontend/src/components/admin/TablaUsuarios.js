import React from 'react'
import { connect } from 'react-redux'

const TablaUsuarios = (props) => {

    console.log(props)
    let { usuarios } = props

    return (
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="w-full py-2 align-middle inline-block  sm:px-6 lg:px-8">
                    <div className="w-full shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className=" table-fixed break-words w-full divide-y divide-gray-200">
                            <thead className="bg-white w-full">
                                <tr className="w-full">
                                    <th scope="col" className="text-xs px-6 py-3 text-left  font-body font-semibold text-black uppercase tracking-wider"   >
                                        Nombre  </th>
                                    <th scope="col"
                                        className="hidden md:table-cell text-xs px-6 py-3 text-center  font-body  font-semibold text-black uppercase tracking-wider  " >
                                        Rol  </th>
                                    <th scope="col" className="text-xs px-6 py-3 text-center  font-body  font-semibold text-black uppercase tracking-wider "  >
                                        Acciones     </th>

                                </tr>
                            </thead>
                            <tbody className="w-full">
                                {usuarios.map((usuario) =>
                                    <tr key={usuario._id} >

                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black text-opacity-70 hover:text-opacity-90  overflow-hidden flex items-center">   <div style={{ width: '30px', height: '30px', borderRadius: '100%', background: `url(${usuario.avatar}) center center`, backgroundSize: '32px 32px', marginRight: '4px' }}  ></div>{usuario.nombreCompleto}</td>
                                        <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center overflow-hidden ">{usuario.rol}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center  overflow-hidden">
                                            <button className="group" onClick={(e) => { props.abrirPopup(e) }} data-accion="borrar" data-id={usuario._id} data-nombre={usuario.nombreCompleto}><svg style={{ pointerEvents: "none" }} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-black mx-auto text-opacity-60 group-hover:text-opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                            </button>
                                        </td>

                                    </tr>
                                )}


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div >
    )
}

const mapStateToProps = (state) => ({
    usuarios: state.usuarios
})



export default connect(mapStateToProps)(TablaUsuarios)
