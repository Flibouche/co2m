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
                q(".title"),
                { x: 200, opacity: 0 },
                { x: 0, opacity: 1, duration: 1 }
            );
            timeline.fromTo(
                q(".titleabs"),
                { x: 200, opacity: 0 },
                { x: 0, opacity: 0.1, duration: 1 },
                "==0"
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
        <section id="about" ref={ref} className="w-full max-w-[1120px] flex flex-col justify-center min-h-screen">
            <div className="relative">
                <h2 className="titleabs absolute bottom-5 right-[-2%] text-4xl md:text-6xl font-playfair font-extrabold text-right whitespace-nowrap select-none">A PROPOS</h2>
                <h2 className="title text-4xl md:text-6xl font-jost font-extrabold text-right whitespace-nowrap">A PROPOS</h2>
            </div>
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
            const q = gsap.utils.selector(element.current);
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: element.current,
                    start: "top 50%",
                    end: "bottom 50%",
                },
            });
            timeline.fromTo(
                q(".title"),
                { x: -200, opacity: 0 },
                { x: 0, opacity: 1, duration: 1 }
            );
            timeline.fromTo(
                q(".titleabs"),
                { x: -200, opacity: 0 },
                { x: 0, opacity: 0.1, duration: 1 },
                "==0"
            );
            timeline.fromTo(
                q(".hrcustom"),
                { x: -100, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.7 },
                "-=0.2"
            );
            timeline.fromTo(
                q(".agency"),
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1 },
                "-=0.5"
            );
            timeline.fromTo(
                q(".hrcustom2"),
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.7 },
                "-=0.1"
            );
            timeline.fromTo(
                q(".service"),
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1 },
                "-=0.5"
            );
        } else {
            console.log("No ref");
        }
    }, [element]);

    return (
        <section id="services" ref={ref} className="relative w-full max-w-[1120px] flex flex-col justify-center min-h-screen">
            <div className="relative">
                <h2 className="titleabs absolute bottom-5 left-[-2%] md:left-[-5vh] text-4xl md:text-6xl font-playfair font-extrabold text-left whitespace-nowrap select-none">EXPERTISE</h2>
                <h2 className="title text-4xl md:text-6xl font-jost font-extrabold text-left whitespace-nowrap">EXPERTISE</h2>
            </div>
            <hr className="hrcustom mb-5" />
            <p className="agency">Notre agence pourra répondre à tous vos besoins en développement et communication, grâce à toutes les compétences dont elle fait preuve ! Voilà en quoi nous pouvons être utile !</p>
            <hr className="hrcustom2 hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -rotate-90 w-[90vh]" />
            {services.map((service, index) => (
                <div key={index} className={`service flex flex-col items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} p-8`}>
                    {/* Colonne de texte */}
                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                        <div className="my-5">
                            <h3 className="font-playfair font-regular text-2xl md:text-4xl mb-3">{service.title}</h3>
                            <p className="mb-5">{service.description}</p>
                            <button className="text-sm border border-white px-10 py-2 rounded-3xl hover:bg-white hover:text-black cursor-pointer mt-4 duration-500">
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
            <div className="relative mt-20 mb-40">
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
    const element = ref as MutableRefObject<HTMLDivElement>

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
                q(".title"),
                { x: 200, opacity: 0 },
                { x: 0, opacity: 1, duration: 1 }
            );
            timeline.fromTo(
                q(".titleabs"),
                { x: 200, opacity: 0 },
                { x: 0, opacity: 0.1, duration: 1 },
                "==0"
            );
            timeline.fromTo(
                q("hr"),
                { x: 100, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.7 },
                "-=0.2"
            );
            timeline.fromTo(
                q("nav"),
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1 },
                "-=0.5"
            )
            timeline.fromTo(
                q(".projects"),
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1 },
                "-=0.5"
            )
            timeline.fromTo(
                q("p"),
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1 },
                "-=0.5"
            )
            timeline.fromTo(
                q("button"),
                { opacity: 0 },
                { opacity: 1 },
            )
        } else {
            console.log("No ref");
        }
    }, [element]);

    return (
        <section id="portfolio" ref={ref} className="w-full max-w-[1120px] flex flex-col justify-center min-h-screen">
            <div className="relative">
                <h2 className="titleabs absolute bottom-5 right-[-2%] text-4xl md:text-6xl font-playfair font-extrabold text-right whitespace-nowrap select-none">PORTFOLIO</h2>
                <h2 className="title text-4xl md:text-6xl font-jost font-extrabold text-right whitespace-nowrap">PORTFOLIO</h2>
            </div>
            <hr className="mb-5" />
            <nav aria-label='Portfolio navigation' className="mb-5">
                <ul className='flex flex-col md:flex-row items-center space-y-4 md:space-y-0 justify-around font-semibold'>
                    <li className="px-10 hover:bg-white hover:duration-500 hover:text-[#007AFF]"><a href="#">TOUT VOIR</a></li>
                    <li className="px-10 hover:bg-white hover:duration-500 hover:text-[#007AFF]"><a href="#">DEVELOPPEMENT</a></li>
                    <li className="px-10 hover:bg-white hover:duration-500 hover:text-[#007AFF]"><a href="#">PRINT</a></li>
                </ul>
            </nav>
            <div className="projects grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 place-items-center">
                {projects.map((project, index) => (
                    <div key={index} className='relative flex flex-row'>
                        <Link to={`/portfolio/${project.id}`}>
                            <div className="relative overflow-hidden group flex justify-center items-center">
                                <img loading="lazy" src={project.src} alt={project.alt} width={300} height={300} className="group-hover:grayscale group-hover:opacity-30 duration-500 rounded-lg" />
                                <h3 className="absolute font-semibold opacity-0 group-hover:opacity-100 group-hover:duration-500 hover:text-[#007AFF]">{project.title}</h3>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            <div className='work flex flex-col text-center mt-5'>
                <p className="text-xl">Vous aimez nos projets ? Contactez-nous, et discutons ensemble de votre projet !</p>
                <div className="flex justify-center">
                    <button className="text-sm border border-white px-10 py-2 rounded-3xl hover:bg-white hover:text-black cursor-pointer mt-4 duration-500">
                        travaillons ensemble !
                    </button>
                </div>
            </div>
        </section>
    )
});

// =======================================
// ============== Newsletter =============
// =======================================

const MainNewsletter = forwardRef<HTMLDivElement, {}>((_, ref) => {
    const element = ref as MutableRefObject<HTMLDivElement>

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
                q(".title"),
                { x: -200, opacity: 0 },
                { x: 0, opacity: 1, duration: 1 }
            );
            timeline.fromTo(
                q(".titleabs"),
                { x: -200, opacity: 0 },
                { x: 0, opacity: 0.1, duration: 1 },
                "==0"
            );
        } else {
            console.log("No ref");
        }
    }, [element]);

    return (
        <section id="newsletter" ref={ref} className="w-full max-w-[1120px] flex flex-col justify-center min-h-screen">
            <div className="relative">
                <h2 className="titleabs absolute bottom-5 left-[-2%] md:left-[-5vh] text-4xl md:text-6xl font-playfair font-extrabold text-left whitespace-nowrap select-none">NEWSLETTER</h2>
                <h2 className="title text-4xl md:text-6xl font-jost font-extrabold text-left whitespace-nowrap">NEWSLETTER</h2>
            </div>
            <hr className="mb-5" />
            <div className="flex flex-col items-center gap-y-5">
                <p className="text-xl">RESTEZ INFORMÉS AVEC NOTRE NEWSLETTER</p>
                <form id="newsletter" action="#" className="relative flex">
                    {/* <label htmlFor="email">Email</label> */}
                    <div className="w-[250px] transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-[#007AFF]">
                        <input type="text" id="email" placeholder="Entrez votre adresse e-mail" className="focus-within:border-[#007AFF] w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none" />
                    </div>
                    <button type="submit" className="absolute right-0">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={20} fill="white" className="hover:fill-[#007AFF] duration-500">
                            <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
                        </svg>
                    </button>
                </form>
            </div>
        </section >
    )
});

// =======================================
// =============== Contact ===============
// =======================================

const MainContact = forwardRef<HTMLDivElement, {}>((_, ref) => {
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
                q(".title"),
                { x: 200, opacity: 0 },
                { x: 0, opacity: 1, duration: 1 }
            );
            timeline.fromTo(
                q(".titleabs"),
                { x: 200, opacity: 0 },
                { x: 0, opacity: 0.1, duration: 1 },
                "==0"
            );
        } else {
            console.log("No ref");
        }
    }, [element]);

    return (
        <section id="contact" ref={ref} className="w-full max-w-[1120px] flex flex-col justify-center min-h-screen">
            <div className="relative">
                <h2 className="titleabs absolute bottom-5 right-[-2%] text-4xl md:text-6xl font-playfair font-extrabold ext-right whitespace-nowrap select-none">CONTACT</h2>
                <h2 className="title text-4xl md:text-6xl font-jost font-extrabold text-right whitespace-nowrap">CONTACT</h2>
            </div>
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