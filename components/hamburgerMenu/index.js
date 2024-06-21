// src/components/HamburgerMenu.js
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button onClick={toggleMenu} className="text-white focus:outline-none pr-10">
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
            {isOpen && (
                <div className="absolute top-0 left-0 w-full h-full bg-blue-primary z-10 flex flex-col items-center justify-center">
                    <a href="#conocenos" className="text-white text-2xl mb-4" onClick={toggleMenu}>Conócenos</a>
                    <a href="#sumate" className="text-white text-2xl mb-4" onClick={toggleMenu}>Súmate</a>
                    <a href="#contacto" className="text-white text-2xl mb-4" onClick={toggleMenu}>Contacto</a>
                </div>
            )}
        </div>
    );
}
