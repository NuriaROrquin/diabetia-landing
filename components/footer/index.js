export const Footer = () => {
    return (

        <footer className="bg-blue-primary">
            <div className="container mx-auto px-8 flex justify-between items-center py-8">
                    <div className="flex flex-col">
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#"
                                   className="no-underline text-white hover:text-gray-900 transition-all">Quienes somos</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#"
                                   className="no-underline text-white hover:text-gray-900 transition-all">Quienes somos</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#"
                                   className="no-underline text-white hover:text-gray-900 transition-all">Nuestra historia</a>
                            </li>
                    </div>
                    <div>
                        <img src="/logo-blanco.png" className="w-20" alt="logo diabetIA" />
                    </div>
            </div>
        </footer>
    )
}