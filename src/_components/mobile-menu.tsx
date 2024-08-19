"use client";

import { useState } from "react";

export const MobileMenu = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div className="md:hidden cursor-pointer" onClick={handleMenuToggle}>
                <img src="/menu.svg" alt="Menu" width={40} height={40} />
            </div>

            <div className={`md:hidden fixed top-0 right-0 w-full h-full bg-red-500 z-50 transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <button className="absolute top-4 right-4 text-2xl" onClick={handleMenuToggle}>&times;</button>
                <nav className="flex flex-col items-center mt-16 space-y-4">
                    <ul className="text-black">
                        <li>ACCUEIL</li>
                        <li>A PROPOS</li>
                        <li>SERVICES</li>
                        <li>PORTFOLIO</li>
                        <li>BLOG</li>
                        <li>CONTACT</li>
                    </ul>
                </nav>
            </div>
        </>
    )
}