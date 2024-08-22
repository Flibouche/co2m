import { MobileMenu } from "../_components/mobile-menu";

const Header = () => {
    return (
        <header className="fixed w-full px-10 min-h-[100px] flex justify-center items-center backdrop-blur">
            <Nav />
        </header>
    )
}

const Nav = () => {
    return (
        <nav className="w-full flex justify-between items-center px-[10px]">
            <NavLogo />
            <NavLinks />
            <MobileMenu />
        </nav>
    )
}

const NavLogo = () => {
    return (
        <div className="flex items-center">
            <a href="#">
            <img src="/logo.png" alt="CO2M's logo" width={75} height={75} className="filter invert brightness-0" />
            </a>
        </div>
    )
}

const NavLinks = () => {
    return (
        <div>
            <ul className="hidden md:flex justify-center items-center gap-[20px] font-montserrat font-semibold text-white">
                <li><a href="/">ACCUEIL</a></li>
                <li><a href="#about">A PROPOS</a></li>
                <li><a href="#services">SERVICES</a></li>
                <li><a href="#portfolio">PORTFOLIO</a></li>
                <li><a href="#blog">BLOG</a></li>
                <li><a href="#contact">CONTACT</a></li>
            </ul>
        </div>
    )
}

export default Header;