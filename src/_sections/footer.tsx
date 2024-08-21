const Footer = () => {
    return (
        <footer className="w-full h-[300px] lg:h-[150px]  flex justify-center backdrop-blur text-white">
            <div className="w-full max-w-[1120px] flex flex-col lg:flex-row justify-between items-center px-[10px] py-[20px] lg:py-0 gap-[50px] lg:gap-0">
                <FooterLegal />
                <FooterInfo />
            </div>
        </footer>
    )
}

const FooterLegal = () => {
    return (
        <div>
            <ul>
                <li>© CO2M 2019 - 2024 - Réalisé par CO2M</li>
                <li><a href="#">Mentions légales</a> - <a href="#">Politique de confidentialité</a></li>
            </ul>
        </div>
    )
}

const FooterInfo = () => {
    return (
        <div>
            <FooterLogo />
            <FooterSocial />
        </div>
    )
}

const FooterLogo = () => {
    return (
        <div>
            <img src="/logo.png" alt="CO2M's logo" width={75} height={75} className="filter invert brightness-0" />
        </div>
    )
}

const FooterSocial = () => {
    return (
        <div>
            
        </div>
    )
}

export default Footer;