import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
    return (

        <footer className="bg-blue-primary">
            <div className="container mx-auto px-8 flex justify-between items-center py-8">
                    <div className="flex flex-col">
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <Link href="#"
                                   className="no-underline text-white hover:text-gray-900 transition-all">Quienes somos</Link>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <Link href="#"
                                   className="no-underline text-white hover:text-gray-900 transition-all">Quienes somos</Link>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <Link href="#"
                                   className="no-underline text-white hover:text-gray-900 transition-all">Nuestra historia</Link>
                            </li>
                    </div>
                    <div>
                        <Image src="/logo-blanco.png" width="80" height="80" alt="logo diabetIA" />
                    </div>
            </div>
        </footer>
    )
}