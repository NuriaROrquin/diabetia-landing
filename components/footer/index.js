import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
    return (

        <footer className="bg-white">
            <div className="container mx-auto px-8 flex justify-between items-center py-8">
                    <div className="flex flex-col">
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <Link href="#"
                                   className="no-underline text-blue-primary hover:text-gray-900 transition-all">Conocenos</Link>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <Link href="#"
                                   className="no-underline text-blue-primary hover:text-gray-900 transition-all">Sumate</Link>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <Link href="#"
                                   className="no-underline text-blue-primary hover:text-gray-900 transition-all">Iniciá sesion</Link>
                            </li>
                    </div>
                    <div>
                        <Image src="/logo-celeste.png" width="80" height="80" alt="logo diabetIA" />
                    </div>
            </div>
        </footer>
    )
}