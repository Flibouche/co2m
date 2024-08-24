import { useState } from "react";

export const MobileMenu = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsOpen(!isOpen);
    }

    const style = "duration-500 hover:text-[#007AFF]"

    return (
        <>
            <div className="md:hidden cursor-pointer" onClick={handleMenuToggle}>
                <img src="/menu.svg" alt="Menu" width={40} height={40} className="filter invert brightness-0" />
            </div>

            <div className={`md:hidden fixed top-0 right-0 w-full h-screen backdrop-blur bg-black/80 z-20 transition-transform duration-700 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <button className="absolute top-3 right-12 text-6xl" onClick={handleMenuToggle}>&times;</button>
                <nav className="flex flex-col justify-center items-center h-screen">
                    <ul className="text-4xl text-left font-jost font-medium space-y-2">
                        <li onClick={handleMenuToggle} className={style}>
                            <a href="/">ACCUEIL</a>
                        </li>
                        <li onClick={handleMenuToggle} className={style}>
                            <a href="#about">A PROPOS</a>
                        </li>
                        <li onClick={handleMenuToggle} className={style}>
                            <a href="#services">SERVICES</a>
                        </li>
                        <li onClick={handleMenuToggle} className={style}>
                            <a href="#portfolio">PORTFOLIO</a>
                        </li>
                        <li onClick={handleMenuToggle} className={style}>
                            <a href="#blog">BLOG</a>
                        </li>
                        <li onClick={handleMenuToggle} className={style}>
                            <a href="#contact">CONTACT</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}