// React
import { useRef, useEffect, forwardRef, RefObject, MutableRefObject } from "react";
import { Link as ScrollLink } from "react-scroll";
import ScrollToTopButton from "../_components/scrolltotop";

// NPM ressources
// Router
import { Link } from "react-router-dom";

// GSAP
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// Framer
import { motion } from "framer-motion"

// Datas
import { projects } from '../data/projects';
import { services } from '../data/services';
import { contacts } from '../data/contacts';

// =======================================
// ================= Main ================
// =======================================

const Main = () => {
    const aboutRef = useRef<HTMLDivElement | null>(null);
    const servicesRef = useRef<HTMLDivElement | null>(null);
    const portfolioRef = useRef<HTMLDivElement | null>(null);
    const newsletterRef = useRef<HTMLDivElement | null>(null);
    const contactRef = useRef<HTMLDivElement | null>(null);

    return (
        <div className="flex">
            <SideBar aboutRef={aboutRef} servicesRef={servicesRef} portfolioRef={portfolioRef} newsletterRef={newsletterRef} contactRef={contactRef} />
            <main className="flex justify-center flex-1 font-syne overflow-x-hidden">
                <div className="w-full min-w-full flex flex-col items-center justify-around gap-[30px] pl-12 sm:pl-16 pr-10 py-10">
                    <MainHero />
                    <MainAbout ref={aboutRef} />
                    <MainServices ref={servicesRef} />
                    <MainPortfolio ref={portfolioRef} />
                    <MainNewsletter ref={newsletterRef} />
                    <MainContact ref={contactRef} />
                </div>
            </main>
            <ScrollToTopButton />
        </div>
    )
}

// =======================================
// =============== SideBar ===============
// =======================================

const SideBar = forwardRef<HTMLDivElement, { aboutRef: RefObject<HTMLDivElement>, servicesRef: RefObject<HTMLDivElement>, portfolioRef: RefObject<HTMLDivElement>, newsletterRef: RefObject<HTMLDivElement>, contactRef: RefObject<HTMLDivElement> }>(({ aboutRef, servicesRef, portfolioRef, newsletterRef }) => {
    const aboutLinkRef = useRef<HTMLLIElement | null>(null);
    const servicesLinkRef = useRef<HTMLLIElement | null>(null);
    const portfolioLinkRef = useRef<HTMLLIElement | null>(null);
    const newsletterLinkRef = useRef<HTMLLIElement | null>(null);
    const contactLinkRef = useRef<HTMLLIElement | null>(null);

    const links = [
        { ref: aboutRef, linkRef: aboutLinkRef },
        { ref: aboutRef, linkRef: servicesLinkRef },
        { ref: servicesRef, linkRef: portfolioLinkRef },
        { ref: portfolioRef, linkRef: newsletterLinkRef },
        { ref: newsletterRef, linkRef: contactLinkRef }
    ];

    const style = "transform -rotate-90 cursor-pointer text-center text-xs sm:text-sm font-semibold whitespace-nowrap hover:duration-500 hover:text-[#007AFF]";

    useEffect(() => {
        links.forEach(({ ref, linkRef }) => {
            if (ref.current && linkRef.current) {
                gsap.fromTo(linkRef.current,
                    { opacity: 0 }, // Départ de l'opacité à 0
                    {
                        opacity: 1, // Arrivée de l'opacité à 1
                        duration: 0.5, // Durée de l'animation
                        scrollTrigger: {
                            trigger: ref.current, // L'animation se déclenche quand `MainServices` est visible
                            start: "top 50%", // Démarre quand le haut de `MainAbout` atteint le centre de l'écran
                            end: "bottom 50%", // Se termine quand le bas de `MainAbout` atteint le centre
                            toggleActions: "play none none none", // Joue l'animation à l'entrée
                        }
                    }
                );
            }
        }, [links]);
    })

    return (
        <nav id="sidebar" className="fixed left-0 bottom-10 h-full flex flex-col items-center justify-end text-white w-10 sm:w-16 z-10">
            <ul className="flex flex-col items-center font-montserrat space-y-24">
                <li ref={contactLinkRef} className={style}>
                    <ScrollLink to="contact" spy={true} smooth={true} duration={500} offset={-70} isDynamic={true}>Contact</ScrollLink>
                </li>
                <li ref={newsletterLinkRef} className={style}>
                    <ScrollLink to="newsletter" spy={true} smooth={true} duration={500} offset={-70} isDynamic={true}>Newsletter</ScrollLink>
                </li>
                <li ref={portfolioLinkRef} className={style}>
                    <ScrollLink to="portfolio" spy={true} smooth={true} duration={500} offset={-70} isDynamic={true}>Portfolio</ScrollLink>
                </li>
                <li ref={servicesLinkRef} className={style}>
                    <ScrollLink to="services" spy={true} smooth={true} duration={500} offset={-70} isDynamic={true}>Services</ScrollLink>
                </li>
                <li className={style}>
                    <ScrollLink to="about" spy={true} smooth={true} duration={500} offset={-70} isDynamic={true}>A propos</ScrollLink>
                </li>
            </ul>
        </nav>
    )
});

// =======================================
// ================= Hero ================
// =======================================

const MainHero = () => {
    const hero = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from(hero.current, {
            duration: 2,
            opacity: 0,
            y: 150,
            ease: "power3.out"
        })
    })

    return (
        <section id="hero" ref={hero} className="w-full flex flex-col justify-center items-center sm:items-center min-h-screen">
            <div className="relative flex flex-col justify-start mb-2">
                <img src="/logo.png" alt="CO2M's logo" className="absolute top-[-5%] left-[17%] filter invert brightness-0 opacity-5 w-[60%] select-none" />
                <h1 className="textPersonalized text-7xl md:text-[20vh] xl:text-[30vh] font-jost font-extrabold">CO2M</h1>
                <h2 className="text-left font-jost text-2xl md:text-5xl xl:text-7xl pl-2">WEBDESIGN <span className="text-xl md:text-4xl xl:text-5xl">&</span></h2>
                <h2 className="font-jost text-2xl md:text-5xl xl:text-7xl pl-2">COMMUNICATION</h2>
            </div>
            <ScrollLink to="about" spy={true} smooth={true} duration={500} offset={-70} isDynamic={true} className="cursor-pointer">
                <div className="absolute bottom-20 w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2 opacity-25">
                    <motion.div
                        animate={{
                            y: [0, 24, 0],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "loop",
                        }}
                        className="w-3 h-3 rounded-full bg-white mb-1"
                    />
                </div>
            </ScrollLink>
        </section>
    )
}

// =======================================
// ================ About ================
// =======================================

const MainAbout = forwardRef<HTMLDivElement, {}>((_, ref) => {
    const element = ref as MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        if (element.current) {
            const q = gsap.utils.selector(element.current);
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: element.current,
                    start: "top 50%",
                    end: "bottom 50%",
                },
            });
            timeline.fromTo(
                q("h2"),
                { x: 200, opacity: 0 },
                { x: 0, opacity: 1, duration: 1 }
            );
            timeline.fromTo(
                q("hr"),
                { x: 100, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.7 },
                "-=0.2"
            );
            timeline.fromTo(
                q("blockquote"),
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1 },
                "-=0.5"
            );
            timeline.fromTo(
                q("a"),
                { opacity: 0 },
                { opacity: 1 },
                "-=0.5"
            );
        } else {
            console.log("No ref");
        }
    }, [element]);

    return (
        <section id="about" ref={ref} className="max-w-[1120px] flex flex-col justify-center min-h-screen">
            <h2 className="text-4xl md:text-6xl font-jost font-extrabold text-right whitespace-nowrap">A PROPOS</h2>
            <hr className="mb-5" />
            <blockquote className="mb-10">
                <p className="text-md md:text-lg">CO2M, société spécialisée dans le domaine du webdesign et de la communication, vous accompagnera dans tous vos projets : création de site internet, développement d'application mobile, design de cartes de visite / affiches / flyers…</p>
                <cite className="text-sm md:text-md">Maxime METTEY, CEO</cite>
            </blockquote>
            <div className="flex justify-end">
                <a href="#" className="underline text-sm md:text-md duration-500 hover:text-[#007AFF]">Plus de détails</a>
            </div>
        </section>
    )
});

// =======================================
// =============== Services ==============
// =======================================

const MainServices = forwardRef<HTMLDivElement, {}>((_, ref) => {
    const element = ref as MutableRefObject<HTMLDivElement>

    useEffect(() => {
        if (element.current) {
            gsap.fromTo(
                element.current,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: element.current,
                        start: "top 50%",
                        end: "bottom 50%",
                    },
                }
            );
        } else {
            console.log("No ref");
        }
    }, [element]);

    return (
        <section id="services" ref={ref} className="relative max-w-[1120px] flex flex-col justify-center min-h-screen">
            <h2 className="text-4xl md:text-6xl font-jost font-extrabold text-left whitespace-nowrap">EXPERTISE</h2>
            <h2 className="absolute top-[-2vh] left-[-3vh] md:left-[-5vh] text-4xl md:text-6xl font-playfair font-extrabold text-left whitespace-nowrap opacity-5 select-none">EXPERTISE</h2>
            <hr className="mb-5" />
            <p className="agency">Notre agence pourra répondre à tous vos besoins en développement et communication, grâce à toutes les compétences dont elle fait preuve ! Voilà en quoi nous pouvons être utile !</p>
            <hr className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -rotate-90 w-[90vh]" />
            {services.map((service, index) => (
                <div key={index} className={`flex flex-col items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} p-8`}>
                    {/* Colonne de texte */}
                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                        <div className="my-5">
                            <h3 className="font-playfair font-regular text-2xl md:text-4xl">{service.title}</h3>
                            <p>{service.description}</p>
                            <button className="text-sm border border-white px-10 py-2 rounded-3xl hover:bg-white hover:text-black cursor-pointer mt-4">
                                en savoir plus
                            </button>
                        </div>
                    </div>
                    {/* Colonne d'image */}
                    {/* Mobile */}
                    <div className="block md:hidden md:w-1/2 mt-6 md:mt-0 relative">
                        <img loading="lazy" src={service.src} alt={service.alt} width={300} height={300} className="mx-auto rounded-3xl grayscale" />
                        <img loading="lazy" src={service.src} alt={service.alt} width={200} height={200} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-3xl" />
                    </div>
                    {/* Desktop */}
                    <div className="hidden md:block md:w-1/2 mt-6 md:mt-0 relative">
                        <img loading="lazy" src={service.src} alt={service.alt} width={300} height={300} className="mx-auto rounded-3xl grayscale" />
                        <img loading="lazy" src={service.src} alt={service.alt} width={240} height={240} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-3xl hover:scale-[1.15] duration-500" />
                    </div>
                </div>
            ))}
            <div className="relative">
                <div className="slider absolute font-jost font-bold w-screen flex text-6xl whitespace-nowrap opacity-15 select-none">
                    <p>WEBDESIGN COMMUNICATION WEBDESIGN COMMUNICATION WEBDESIGN COMMUNICATION WEBDESIGN COMMUNICATION</p>
                </div>
            </div>
        </section>
    )
});

// =======================================
// ============== Portfolio ==============
// =======================================

const MainPortfolio = forwardRef<HTMLDivElement, {}>((_, ref) => {
    return (
        <section id="portfolio" ref={ref} className="w-full flex flex-col justify-center min-h-screen">
            <h2 className="text-4xl font-jost font-extrabold text-right whitespace-nowrap">PORTFOLIO</h2>
            <hr className="mb-5" />
            <p>Retrouvez nos dernières réalisations</p>
            <nav aria-label='Portfolio navigation'>
                <ul className='flex'>
                    <li><a href="#">Tout voir</a></li>
                    <li><a href="#">Développement web</a></li>
                    <li><a href="#">Print</a></li>
                </ul>
            </nav>
            <div className='hidden'>
                {projects.map((project, index) => (
                    <div key={index} className='relative overflow-hidden'>
                        <Link to={`/portfolio/${project.id}`}>
                            <img src={project.src} alt={project.alt} width={250} height={250} />
                            <div className='absolute top-0 left-0 text-black'>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            <div className='flex'>
                <div>
                    <h3>Vous aimez nos projets ?</h3>
                    <span>Contactez-nous, et discutons de votre projet</span>
                </div>
                <button>Travaillons ensemble !</button>
            </div>
        </section>
    )
});

// =======================================
// ============== Newsletter =============
// =======================================

const MainNewsletter = forwardRef<HTMLDivElement, {}>((_, ref) => {
    return (
        <section id="newsletter" ref={ref} className="w-full flex flex-col justify-center min-h-screen">
            <h2 className="text-4xl font-jost font-extrabold text-right whitespace-nowrap">NEWSLETTER</h2>
            <hr className="mb-5" />
            <form id="newsletter" action="#">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" placeholder="Entrez votre adresse e-mail" />
                <button type="submit">Envoyer</button>
            </form>
        </section>
    )
});

// =======================================
// =============== Contact ===============
// =======================================

const MainContact = forwardRef<HTMLDivElement, {}>((_, ref) => {
    return (
        <section id="contact" ref={ref} className="w-full flex flex-col justify-center min-h-screen">
            <h2 className="text-4xl font-jost font-extrabold text-right whitespace-nowrap">CONTACT</h2>
            <hr className="mb-5" />
            <span>Pour toute demande, n'hésitez pas à prendre directement contact avec nous.</span>
            <div className='flex'>
                {contacts.map((contact, index) => (
                    <div key={index}>
                        <img src={contact.src} alt={contact.alt} width={50} height={50} />
                        <p>{contact.title}</p>
                    </div>
                ))}
            </div>

            <div>
                <form id="contactForm" action="#">
                    <label htmlFor="prenom">Prénom</label>
                    <input type="text" id="prenom" placeholder="Entrez votre prénom" required />

                    <label htmlFor="nom">Nom</label>
                    <input type="text" id="nom" placeholder="Entrez votre nom" required />

                    <label htmlFor="message">Message</label>
                    <textarea id="message" placeholder="Entrez votre message" required></textarea>

                    <button type="submit">Envoyer</button>
                </form>
            </div>
        </section>
    )
});

export default Main;