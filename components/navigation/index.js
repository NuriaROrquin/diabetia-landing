import Link from "next/link";
import Image from "next/image";

export const Navigation = () => {
    return (
        <nav id="header" className="fixed w-full z-30 top-0 text-white">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                <div className="pl-4 flex items-center">
                    <Link className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                       href="/">
                        <Image src="/logo-blanco.png" width={48} height={48} alt="logo diabetIA" />
                    </Link>
                </div>
                <div
                    className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
                    id="nav-content">
                    <ul className="list-reset lg:flex justify-end flex-1 items-center">
                        <li className="mr-3">
                            <Link className="inline-block text-white no-underline hover:font-bold transition-all ease-in-out py-2 px-4" href="#">Conocenos</Link>
                        </li>
                        <li className="mr-3">
                            <Link className="inline-block text-white no-underline hover:font-bold transition-all ease-in-out py-2 px-4" href="#">Sumate</Link>
                        </li>
                        <li className="mr-3">
                            <Link className="inline-block text-white no-underline hover:font-bold transition-all ease-in-out py-2 px-4" href="#">Inicia sesión</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <hr className="border-b border-white opacity-25 my-0 py-0"/>
        </nav>
    )
}