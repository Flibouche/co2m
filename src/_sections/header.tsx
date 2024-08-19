import { MobileMenu } from "../_components/mobile-menu";

const Header = () => {
    return (
        <header className="fixed w-full min-h-[75px] flex justify-center items-center backdrop-blur bg-white/50">
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
            <a href="#">
            <img src="/logo.png" alt="CO2M's logo" width={75} height={75} />
            </a>
        </div>
    )
}

const NavLinks = () => {
    return (
        <div>
            <ul className="hidden md:flex justify-center items-center gap-[20px] font-montserrat font-semibold text-white">
                <li><a href="#">ACCUEIL</a></li>
                <li><a href="#">A PROPOS</a></li>
                <li><a href="#">SERVICES</a></li>
                <li><a href="#">PORTFOLIO</a></li>
                <li><a href="#">BLOG</a></li>
                <li><a href="#">CONTACT</a></li>
            </ul>
        </div>
    )
}

export default Header;