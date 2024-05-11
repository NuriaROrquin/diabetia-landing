export const Banner = () => {
    return (
            <section className="background-radial-gradient pt-32 min-h-80 relative">

                <div className="px-6 pt-12 text-center md:px-12 lg:text-left">
                    <div className="container mx-auto">
                        <div className="grid items-center gap-12 lg:grid-cols-2">
                            <div className="mt-12 lg:mt-0 z-10">
                                <h1 className="mb-12 text-5xl font-bold tracking-tight text-white md:text-6xl xl:text-7xl">
                                    DiabetIA <br/><span
                                    className="text-orange-primary">Contá con nosotros</span>
                                </h1>
                                <p className="text-lg text-white">
                                    Descubrinos, somos la aplicación ideal para el control de tu diabetes.
                                </p>
                                <p className="text-lg text-white">
                                    ¡Comenzá ya mismo!
                                </p>
                            </div>
                            <div className="z-0 absolute right-0 bottom-0">
                                <img src="/image1.webp" className="opacity-30 lg:opacity-100 lg:h-400 2xl:h-600" alt="persona midiendose con glucómetro" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}