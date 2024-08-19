// import Image from "next/image";
import { MobileMenu } from "../_components/mobile-menu";

const Header = () => {
    return (
        <header className="w-full min-h-[75px] flex justify-center items-center border-b-2 border-black">
            <Nav />
        </header>
    )
}

const Nav = () => {
    return (
        <nav className="w-full max-w-[1120px] flex justify-between items-center px-[10px]">
            <NavLogo />
            <NavLinks />
            <MobileMenu />
        </nav>
    )
}

const NavLogo = () => {
    return (
        <div className="flex items-center">
            <img src="/logo.png" alt="CO2M's logo" width={75} height={75} />
        </div>
    )
}

const NavLinks = () => {
    return (
        <div>
            <ul>
                <li></li>
            </ul>
        </div>
    )
}

export default Header;