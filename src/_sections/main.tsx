import React from 'react';

// Router
import { Link } from "react-router-dom";

// GSAP
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef, useEffect } from "react";
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
    const skillsRef = useRef<HTMLDivElement | null>(null);

    return (
        <div className="flex">
            <SideBar aboutRef={aboutRef} skillsRef={skillsRef} />
            <main className="flex justify-center flex-1 font-montserrat z-[-1]">
                <div className="w-full min-w-full flex flex-col items-center justify-around gap-[30px] pl-16 pr-10 py-10">
                    <MainHero />
                    <MainAbout ref={aboutRef} />
                    {/* <MainAbout ref={aboutRef} /> */}
                    <MainSkills ref={skillsRef} />
                    <MainServices />
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

const SideBar = React.forwardRef<HTMLDivElement, { aboutRef: React.RefObject<HTMLDivElement> }>(({ aboutRef }, ref) => {
    const aboutLinkRef = useRef<HTMLLIElement | null>(null);

    useEffect(() => {
        if (aboutRef && aboutRef.current && aboutLinkRef.current) {
            gsap.fromTo(aboutLinkRef.current,
                { opacity: 0 }, // Départ de l'opacité à 0
                {
                    opacity: 1, // Arrivée de l'opacité à 1
                    duration: 1, // Durée de l'animation
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: aboutRef.current, // Lien à l'élément `aboutRef`
                        markers: true, // Affiche les marqueurs de ScrollTrigger
                        start: "top 50%", // Démarre quand le haut de `MainAbout` atteint le centre de l'écran
                        end: "bottom 50%", // Se termine quand le bas de `MainAbout` atteint le centre
                        toggleActions: "play none none none", // Joue l'animation à l'entrée
                    }
                }
            );
        }
    }, [aboutRef]);

    // const aboutlink = useRef<HTMLLIElement>(null);

    // useGSAP(() => {
    //     gsap.from(aboutlink.current, {
    //         duration: 1.5,
    //         opacity: 0,
    //         y: 50,
    //         ease: "power3.out",
    //         scrollTrigger: {
    //             trigger: aboutRef.current,
    //             start: "top 30%",
    //             end: "bottom 40%",
    //             toggleActions: "restart none none none",
    //         }
    //     })
    // }, [aboutRef])

    return (
        <nav className="fixed left-0 bottom-10 h-full flex flex-col items-center justify-end text-white w-16 z-10">
            <ul className="flex flex-col items-center font-montserrat space-y-24">
                {/* <li className="transform -rotate-90 text-center text-xs sm:text-sm font-semibold whitespace-nowrap">
                    Services
                </li> */}
                {/* <li ref={aboutlink} className="transform -rotate-90 text-center text-xs sm:text-sm font-semibold whitespace-nowrap"> */}
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
            duration: 1.5,
            opacity: 0,
            y: 50,
            ease: "power3.out"
        })
    })

    return (
        <section id="hero" ref={hero} className="flex flex-col justify-center items-center h-screen">
            <h1 className="hidden">CO2M</h1>
            <div className="flex items-center mb-2">
                <h2 className="font-abril text-4xl sm:text-5xl md:text-6xl mb-5">WebDesign</h2>
                <span className="font-abril text-4xl sm:text-6xl md:text-8xl">&</span>
            </div>
            <div className="relative flex items-center">
                <img src="/logo.png" alt="CO2M's logo" className="absolute filter invert brightness-0 opacity-10 w-[80%] select-none" />
                <h2 className="font-abril text-4xl sm:text-5xl md:text-6xl pl-2">Communication</h2>
            </div>
            <div className="mt-10">
                <p>Depuis 2019</p>
                <p>Web</p>
                <p>Mobile</p>
                <p>Logiciel</p>
                <p>Design</p>
            </div>
        </section>
    )
}

// =======================================
// ================ About ================
// =======================================

const MainAbout = React.forwardRef<HTMLDivElement, {}>((_, ref) => {
    useEffect(() => {
        if (ref && ref.current) {
            gsap.fromTo(ref.current, { y: 100, opacity: 0 }, {
                y: 0,
                opacity: 1,
                duration: 2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ref.current,
                    start: "top 50%",
                    end: "bottom 50%",
                }
            });
        } else {
            console.log('No ref');
        }
    }, [ref]);

    // useEffect(() => {
    //     if (ref && ref.current) {
    //         gsap.fromTo(
    //             ref.current,
    //             { y: 100, opacity: 0 },
    //             {
    //                 y: 0,
    //                 opacity: 1,
    //                 duration: 2,
    //                 ease: "power3.out",
    //                 scrollTrigger: {
    //                     trigger: ref.current,
    //                     // markers: true, // Décommentez pour afficher les marqueurs de ScrollTrigger
    //                     start: "top 50%",
    //                     end: "bottom 50%",
    //                 },
    //             }
    //         );
    //     } else {
    //         console.log('No ref');
    //     }
    // }, [ref]);

    // useEffect(() => {
    //     if (ref && ref.current) {
    //         gsap.fromTo(ref.current, { y: 100, opacity: 0 }, {
    //             y: 0,
    //             opacity: 1,
    //             duration: 2,
    //             ease: "power3.out",
    //             scrollTrigger: {
    //                 trigger: ref.current,
    //                 markers: true,
    //                 start: "top 50%",
    //                 end: "bottom 50%"
    //             }
    //         })
    //     } else {
    //         console.log('No ref')
    //     }
    // }, [ref.current])

    return (
        // <section id="about" ref={ref} className="flex flex-col justify-center items-center h-screen">
        <section id="about" ref={ref} className="flex flex-col justify-center items-center h-screen">
            <h2 className="font-abril text-4xl mb-2">A propos de la société</h2>
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
    const skillRef = useRef(null);

    useEffect(() => {
        const el = skillRef.current;
        gsap.fromTo(el, { opacity: 0 }, {
            opacity: 1, duration: 3,
            scrollTrigger: {
                trigger: el,
                // markers: true,
                start: "top 40%",
                end: "bottom 40%"
            }
        })
    }, [skillRef])

    return (
        <section id="skills" ref={skillRef} className="flex flex-col justify-center items-center h-screen">
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

const MainServices = () => {
    const servicesRef = useRef(null);

    return (
        <section id="services" ref={servicesRef} className="flex flex-col justify-center items-center h-screen">
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
}

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