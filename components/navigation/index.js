
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav id="header" className="fixed w-full z-30 top-0 text-white bg-blue-primary">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2 px-6">
                <div className="flex items-center">
                    <Link className="toggleColour text-blue-primary no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                          href="/">
                        <Image src="/logo-blanco.png" width={48} height={48} alt="logo diabetIA" />
                    </Link>
                </div>
                <div className="lg:hidden z-40">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
                <div
                    className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"} mt-2 lg:mt-0 bg-blue-primary lg:bg-transparent text-black p-4 lg:p-0 z-30 sticky top-0`}
                    id="nav-content">
                    <ul className="list-reset lg:flex justify-end flex-1 items-center">
                        <li className="mr-3">
                            <Link
                                className="inline-block text-white no-underline hover:font-bold transition-all ease-in-out py-2 px-4"
                                href="#conocenos">Conocenos</Link>
                        </li>
                        <li className="mr-3">
                            <Link
                                className="inline-block text-white no-underline hover:font-bold transition-all ease-in-out py-2 px-4"
                                href="#sumate">Sumate</Link>
                        </li>
                        <li className="mr-3">
                            <a className="inline-block text-white no-underline hover:font-bold transition-all ease-in-out py-2 px-4" href="http://app.diabetia.com.ar" rel="noopener noreferrer">
                                Iniciar sesión
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <hr className="border-b border-white opacity-25 my-0 py-0"/>
        </nav>
    );
}