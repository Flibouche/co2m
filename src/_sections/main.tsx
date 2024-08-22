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
import { skills } from '../data/skills';
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
            <main className="flex justify-center flex-1 font-montserrat z-[-1]">
                <div className="w-full min-w-full flex flex-col items-center justify-around gap-[30px] pl-16 pr-10 py-10">
                    <MainHero />
                    <MainAbout ref={aboutRef} />
                    <MainSkills />
                    <MainServices ref={servicesRef} />
                    <MainPortfolio />
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
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: ref.current, // Lien à l'élément `aboutRef`
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
        <nav className="fixed left-0 bottom-10 h-full flex flex-col items-center justify-end text-white w-16 z-10">
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
            duration: 3,
            opacity: 0,
            y: 150,
            ease: "power3.out"
        })
    })

    return (
        <section id="hero" ref={hero} className="w-full flex flex-col justify-center items-center h-screen">
            <div className="relative flex flex-col justify-start mb-2">
                <img src="/logo.png" alt="CO2M's logo" className="absolute left-[20%] filter invert brightness-0 opacity-5 w-[60%] select-none" />
                <h1 className="textPersonalized text-9xl md:text-[20vh] xl:text-[30vh] font-jost font-extrabold">CO2M</h1>
                <h2 className="text-left font-jost text-3xl md:text-5xl xl:text-7xl pl-2">WEBDESIGN <span className="text-xl md:text-4xl xl:text-5xl">&</span></h2>
                <h2 className="font-jost text-3xl md:text-5xl xl:text-7xl pl-2">COMMUNICATION</h2>
            </div>
            <div className="relative flex flex-col justify-center">
            </div>
            {/* <div className="mt-10">
                <p>Depuis 2019</p>
                <p>Web</p>
                <p>Mobile</p>
                <p>Logiciel</p>
                <p>Design</p>
            </div> */}
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
            gsap.fromTo(
                element.current, // Référence simplifiée
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
        <section id="about" ref={ref} className="flex flex-col justify-center h-screen">
            <h2 className="text-6xl font-jost font-extrabold text-right mb-2">A PROPOS</h2>
            <blockquote>
                <p className="text-md">CO2M, société spécialisée dans le domaine du webdesign et de la communication, vous accompagnera dans tous vos projets : création de site internet, développement d'application mobile, design de cartes de visite / affiches / flyers…</p>
                <cite className="text-sm">Maxime METTEY, CEO</cite>
            </blockquote>
        </section>
    )
});

// =======================================
// =============== Skills ================
// =======================================

const MainSkills = () => {
    return (
        <section id="skills" className="flex flex-col justify-center items-center h-screen">
            <h2>Qui sommes-nous ?</h2>
            <p>L'expertise de notre agence pourra répondre à tous vos besoins en communication, grâce à toutes les compétences dont elle fait preuve !</p>
            <div>
                {skills.map((skill, index) => (
                    <div key={index}>
                        <h4>{skill.title}</h4>
                        <span>% {skill.progress}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}

// =======================================
// =============== Services ==============
// =======================================

const MainServices = forwardRef<HTMLDivElement, {}>((_, ref) => {
    const element = ref as MutableRefObject<HTMLDivElement>

    useEffect(() => {
        if (element.current) {
            gsap.fromTo(
                element.current, // Référence simplifiée
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
        <section id="services" ref={ref} className="flex flex-col justify-center items-center h-screen">
            <h2>Nos services</h2>
            {services.map((service, index) => (
                <div key={index}>
                    <img src={service.src} alt={service.alt} width={50} height={50} />
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
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
        <section id="portfolio" className="flex flex-col justify-center items-center h-screen">
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
        <section id="newsletter" className="flex flex-col justify-center items-center h-screen">
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
        <section id="contact" className="flex flex-col justify-center items-center h-screen">
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