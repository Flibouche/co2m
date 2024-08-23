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
    const style = "duration-500 hover:text-[#007AFF]";

    return (
        <div>
            <ul className="hidden md:flex justify-center items-center gap-[20px] font-montserrat font-semibold cursor-pointer">
                <li className={style}>
                    <ScrollLink to="hero" spy={true} smooth={true} duration={500} offset={-70}>ACCUEIL</ScrollLink>
                </li>
                <li className={style}>
                    <ScrollLink to="about" spy={true} smooth={true} duration={500} offset={-70}>A PROPOS</ScrollLink>
                </li>
                <li className={style}>
                    <ScrollLink to="services" spy={true} smooth={true} duration={500} offset={-70}>SERVICES</ScrollLink>
                </li>
                <li className={style}>
                    <ScrollLink to="portfolio" spy={true} smooth={true} duration={500} offset={-70}>PORTFOLIO</ScrollLink>
                </li>
                <li className={style}>
                    <ScrollLink to="blog" spy={true} smooth={true} duration={500} offset={-70}>BLOG</ScrollLink>
                </li>
                <li className={style}>
                    <ScrollLink to="contact" spy={true} smooth={true} duration={500} offset={-70}>CONTACT</ScrollLink>
                </li>
            </ul>
        </div>
    )
}

export default Header;