// React
import React from 'react';
import { useRef, useEffect, forwardRef, RefObject, MutableRefObject } from "react";

// Router
import { Link } from "react-router-dom";

// GSAP
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// Datas
import { projects } from '../data/projects';
import { services } from '../data/services';
import { contacts } from '../data/contacts';

// =======================================
// ================= Main ================
// =======================================

const Main = () => {
    const aboutRef = useRef<HTMLDivElement | null>(null);
    // const skillsRef = useRef<HTMLDivElement | null>(null);
    const servicesRef = useRef<HTMLDivElement | null>(null);

    return (
        <div className="flex">
            <SideBar aboutRef={aboutRef} servicesRef={servicesRef} />
            <main className="flex justify-center flex-1 font-syne">
                <div className="w-full min-w-full flex flex-col items-center justify-around gap-[30px] pl-12 sm:pl-16 pr-10 py-10">
                    <MainHero />
                    <MainAbout ref={aboutRef} />
                    <Test />
                    <MainServices ref={servicesRef} />
                    {/* <MainPortfolio /> */}
                    <MainNewsletter />
                    <MainContact />
                </div>
            </main>
        </div>
    )
}

// =======================================
// =============== SideBar ===============
// =======================================

const SideBar = forwardRef<HTMLDivElement, { aboutRef: RefObject<HTMLDivElement>, servicesRef: RefObject<HTMLDivElement> }>(({ aboutRef, servicesRef }, ref) => {
    const aboutLinkRef = useRef<HTMLLIElement | null>(null);
    const servicesLinkRef = useRef<HTMLLIElement | null>(null);

    const links = [
        { ref: servicesRef, linkRef: servicesLinkRef },
        { ref: aboutRef, linkRef: aboutLinkRef }
    ];

    useEffect(() => {
        links.forEach(({ ref, linkRef }) => {
            if (ref.current && linkRef.current) {
                gsap.fromTo(linkRef.current,
                    { opacity: 0 }, // Départ de l'opacité à 0
                    {
                        opacity: 1, // Arrivée de l'opacité à 1
                        duration: 2, // Durée de l'animation
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
                <li ref={servicesLinkRef} className="transform -rotate-90 text-center text-xs sm:text-sm font-semibold whitespace-nowrap">
                    Services
                </li>
                <li ref={aboutLinkRef} className="transform -rotate-90 text-center text-xs sm:text-sm font-semibold whitespace-nowrap">
                    A propos
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
        <section id="hero" ref={hero} className="w-full flex flex-col justify-center items-center sm:items-center h-screen">
            <div className="relative flex flex-col justify-start mb-2">
                <img src="/logo.png" alt="CO2M's logo" className="absolute top-[-5%] left-[17%] filter invert brightness-0 opacity-5 w-[60%] select-none" />
                <h1 className="textPersonalized text-7xl md:text-[20vh] xl:text-[30vh] font-jost font-extrabold">CO2M</h1>
                <h2 className="text-left font-jost text-2xl md:text-5xl xl:text-7xl pl-2">WEBDESIGN <span className="text-xl md:text-4xl xl:text-5xl">&</span></h2>
                <h2 className="font-jost text-2xl md:text-5xl xl:text-7xl pl-2">COMMUNICATION</h2>
            </div>
        </section>
    )
}

const Test = () => {
    return (
        <div className="relative">
            <div className="slider absolute font-jost font-bold w-screen flex text-6xl whitespace-nowrap opacity-15 select-none">
                <p>WEBDESIGN COMMUNICATION WEBDESIGN COMMUNICATION WEBDESIGN COMMUNICATION WEBDESIGN COMMUNICATION</p>
            </div>
        </div>
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
                q("button"),
                { opacity: 0 },
                { opacity: 1, duration: 1 },
                "-=0.5"
            );
        } else {
            console.log("No ref");
        }
    }, [element]);

    return (
        <section id="about" ref={ref} className="w-full flex flex-col justify-center h-screen">
            <h2 className="text-4xl font-jost font-extrabold text-right whitespace-nowrap">A PROPOS</h2>
            <hr className="mb-5" />
            <blockquote className="mb-10">
                <p className="text-md">CO2M, société spécialisée dans le domaine du webdesign et de la communication, vous accompagnera dans tous vos projets : création de site internet, développement d'application mobile, design de cartes de visite / affiches / flyers…</p>
                <cite className="text-sm">Maxime METTEY, CEO</cite>
            </blockquote>
            <div>
                <div className="flex justify-center">
                    <button className="border border-white px-10 py-2 rounded-3xl hover:bg-white hover:text-black cursor-pointer">Test</button>
                </div>
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
        <section id="services" ref={ref} className="w-full flex flex-col justify-center h-screen">
            <h2 className="text-4xl font-jost font-extrabold text-right whitespace-nowrap">NOTRE EXPERTISE</h2>
            <hr className="mb-5" />
            <p className="agency">Notre agence pourra répondre à tous vos besoins en développement et communication, grâce à toutes les compétences dont elle fait preuve ! Voilà en quoi nous pouvons être utile !</p>
            {services.map((service, index) => (
                <div key={index} className="my-5">
                    <h3 className="font-playfair font-regular italic text-2xl">{service.title}</h3>
                    <p>{service.description}</p>
                    <button className="text-sm border border-white px-10 py-2 rounded-3xl hover:bg-white hover:text-black cursor-pointer">en savoir plus</button>
                </div>
            ))}
        </section>
    )
});

// =======================================
// ============== Portfolio ==============
// =======================================

const MainPortfolio = () => {
    return (
        <section id="portfolio" className="w-full flex flex-col justify-center h-screen">
            <h2>Notre Portfolio</h2>
            <p>Retrouvez nos dernières réalisations</p>
            <nav aria-label='Portfolio navigation'>
                <ul className='flex'>
                    <li><a href="#">Tout voir</a></li>
                    <li><a href="#">Développement web</a></li>
                    <li><a href="#">Print</a></li>
                </ul>
            </nav>
            <div>
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
}

// =======================================
// ============== Newsletter =============
// =======================================

const MainNewsletter = () => {
    return (
        <section id="newsletter" className="w-full flex flex-col justify-center h-screen">
            <h2>Restez informés avec notre newsletter</h2>
            <form id="newsletter" action="#">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" placeholder="Entrez votre adresse e-mail" />
                <button type="submit">Envoyer</button>
            </form>
        </section>
    )
}

// =======================================
// =============== Contact ===============
// =======================================

const MainContact = () => {
    return (
        <section id="contact" className="w-full flex flex-col justify-center h-screen">
            <h2>Contactez-nous</h2>
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
                <form id="contact" action="#">
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
}

export default Main;