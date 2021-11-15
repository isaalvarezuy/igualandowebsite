import React from 'react'

const Form = () => {
    return (
        <div className="w-full p-4 md:p-0" style={{ background: "linear-gradient(180deg, rgba(252,253,254,1) 30%, rgba(23,23,23,1) 30%, rgba(23,23,23,1) 100%)" }}>
            <div className="w-full md:w-10/12 mx-auto bg-orange md:p-8 rounded-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                    <div className="col-span-1 text-left ">
                        <div className="md:hidden col-span-1">
                            <img className="mx-auto w-full" srcSet="https://res.cloudinary.com/isita/image/upload/v1636937642/static/Group_101_1x_hjfzqp.png 1x,https://res.cloudinary.com/isita/image/upload/v1636937642/static/Group_101_2x_wgjlzg.png 2x" />
                        </div>
                        <h2 className=" -mt-2 md:mt-0 font-title text-5.5xl md:text-hero relative text-black">Sumate!
                            </h2>

                        <p className="mt-0 md:-mt-4 font-body text-base md:p-0">Si queres ser parte del equipo o queres compartir tu historia ponete en contacto con nosotros!</p>


                        <form className="mt-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4">
                                <div className="mb-4 col-span-1">
                                    <div class="relative border border-black rounded-md px-3 py-2 shadow-sm  ">
                                        <label for="nombre" class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-orange text-xs font-medium text-black">Nombre</label>
                                        <input required type="text" name="nombre" id="nombre" class="block w-full bg-orange border-0 p-0 text-black placeholder-black placeholder-opacity-50 focus:ring-0 ring-opacity-0 focus:outline-none sm:text-sm" placeholder="Escribe tu nombre" />
                                    </div>
                                </div>
                                <div className="mb-4 col-span-1">
                                    <div class="relative border border-black rounded-md px-3 py-2 shadow-sm ">
                                        <label for="mail" class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-orange text-xs font-medium text-black">E-mail</label>
                                        <input required type="mail" name="mail" id="mail" class="block w-full bg-orange border-0 p-0 text-black placeholder-black placeholder-opacity-50 focus:ring-0 ring-opacity-0 focus:outline-none sm:text-sm" placeholder="Escribe tu mail" />
                                    </div>
                                </div>
                            </div>
                            <div className="mb-4">
                                <div class="relative border border-black rounded-md px-3 py-2 shadow-sm">
                                    <label for="mail" class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-orange text-xs font-medium text-black">Mensaje</label>
                                    <textarea required name="mail" id="mail" class="block w-full border-0 p-0 bg-orange text-black placeholder-black placeholder-opacity-50 focus:ring-0 focus:border-0 ring-opacity-0 focus:outline-none resize-none h-16" placeholder="Escribe tu mensaje" />
                                </div>
                            </div>
                            <button className="text-center block w-full md:w-auto md:inline-block bg-black py-3 px-8 rounded-3xl text-white text-base hover:bg-opacity-80 transition-all">Enviar</button>
                        </form>


                    </div>



                    <div className="hidden md:block col-span-1 flex items-center">
                        <img className="mx-auto w-9/12" srcSet="https://res.cloudinary.com/isita/image/upload/v1636937642/static/Group_101_1x_hjfzqp.png 1x,https://res.cloudinary.com/isita/image/upload/v1636937642/static/Group_101_2x_wgjlzg.png 2x" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form
