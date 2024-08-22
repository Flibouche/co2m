import { Link as ScrollLink } from "react-scroll";
import { MobileMenu } from "../_components/mobile-menu";

const Header = () => {
    return (
        <header className="fixed w-full px-10 min-h-[75px] sm:min-h-[100px] flex justify-center items-center backdrop-blur z-10">
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
            <ul className="hidden md:flex justify-center items-center gap-[20px] font-montserrat font-semibold cursor-pointer">
                <ScrollLink to="hero" spy={true} smooth={true} duration={500} offset={-70}>ACCUEIL</ScrollLink>
                <ScrollLink to="about" spy={true} smooth={true} duration={500} offset={-70}>A PROPOS</ScrollLink>
                <ScrollLink to="services" spy={true} smooth={true} duration={500} offset={-70}>SERVICES</ScrollLink>
                <ScrollLink to="portfolio" spy={true} smooth={true} duration={500} offset={-70}>PORTFOLIO</ScrollLink>
                <ScrollLink to="blog" spy={true} smooth={true} duration={500} offset={-70}>BLOG</ScrollLink>
                <ScrollLink to="contact" spy={true} smooth={true} duration={500} offset={-70}>CONTACT</ScrollLink>
            </ul>
        </div>
    )
}

export default Header;