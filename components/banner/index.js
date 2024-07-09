export const Banner = () => {
    return (
        <section className="background-radial-gradient pt-32 min-h-80 relative">
            <div className="px-6 pt-12 text-center md:px-12 lg:text-left">
                <div className="container mx-auto">
                    <div className="grid items-center gap-12 lg:grid-cols-2 px-6">
                        <div className="mt-12 lg:mt-0 z-10 text-justify">
                            <h1 className="mb-12 text-4xl font-bold tracking-tight text-white md:text-5xl xl:text-6xl md:text-left">
                                DiabetIA <br/><span className="text-orange-primary">Contá con nosotros</span>
                            </h1>
                            <p className="text-lg text-white mb-4">
                                Descubrinos, somos la aplicación ideal para el control de tu diabetes. Con DiabetIA,
                                llevá un registro detallado de todos tus eventos en un mismo lugar.
                            </p>
                            <p className="text-lg text-white mb-4">
                                DiabetIA está diseñada para facilitar tu vida diaria y proporcionarte las herramientas
                                necesarias para un mayor control de la diabetes.
                            </p>
                            <p className="text-lg text-white mb-4">
                            Dejá atrás los cálculos mentales. Con una simple foto a tu comida podrás obtener la información nutricional necesaria para la correcta administración de insulina.
                             </p>
                            <p className="text-lg text-white">
                                Unite a DiabetIA y aprovechá todas las funcionalidades que ofrecemos para mejorar tu
                                bienestar.
                            </p>
                            <a
                                href="#sumate"
                                className="inline-block bg-orange-primary hover:bg-orange-focus text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all ease-in-out duration-300 hover:bg-orange-dark my-10"
                            >
                                ¡Quiero saber más!
                            </a>
                        </div>
                        <div className="z-0 absolute right-0 bottom-0 pr-6">
                            <img src="/image1.webp" className="opacity-30 lg:opacity-100 lg:h-460 2xl:h-600"
                                 alt="persona midiéndose con glucómetro"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
