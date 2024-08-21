// Router
import { Link } from "react-router-dom";

// GSAP
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef, useEffect } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// Components
import Sidebar from "../_components/sidebar";

// Datas
import { projects } from '../data/projects';
import { skills } from '../data/skills';
import { services } from '../data/services';
import { contacts } from '../data/contacts';

// =======================================
// ================= Main ================
// =======================================

const Main = () => {
    return (
        <div className="flex">
            <Sidebar />
            <main className="flex justify-center flex-1 font-montserrat z-[-1]">
                <div className="w-full min-w-full flex flex-col items-center justify-around gap-[30px] px-10 py-10">
                    <MainHero />
                    <MainAbout />
                    <MainSkills />
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

    // const circle = useRef<HTMLDivElement>(null);

    // useGSAP(() => {
    //     gsap.to(circle.current, {
    //         rotation: "+=360",
    //         duration: 3,
    //         repeat: -1,
    //         ease: "none"
    //     });
    // });

    return (
        <section id="hero" ref={hero} className="flex flex-col justify-center items-center h-screen">
            <h1 className="hidden">CO2M</h1>
            <div className="flex items-center mb-2">
                <h2 className="font-abril text-4xl sm:text-5xl md:text-6xl mb-5">WebDesign</h2>
                <span className="font-abril text-4xl sm:text-6xl md:text-8xl">&</span>
            </div>
            <div className="relative flex items-center">
                <img src="/logo.png" alt="CO2M's logo" className="absolute filter invert brightness-0 opacity-10 w-[80%]" />
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

const MainAbout = () => {
    const about = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from(about.current, {
            duration: 1.5,
            opacity: 0,
            y: 50,
            ease: "power3.out",
            scrollTrigger: {
                trigger: about.current,
                start: "top 80%",
                end: "top 30%",
                toggleActions: "play none none none",
            }
        })
    })

    return (
        <section id="about" ref={about} className="flex flex-col justify-center items-center h-screen">
            <h2 className="font-abril text-4xl mb-2">A propos de la société</h2>
            <blockquote>
                <p className="text-md">CO2M, société spécialisée dans le domaine du webdesign et de la communication, vous accompagnera dans tous vos projets : création de site internet, développement d'application mobile, design de cartes de visite / affiches / flyers…</p>
                <cite className="text-sm">Maxime METTEY, CEO</cite>
            </blockquote>
        </section>
    )
}

// =======================================
// ================ Stats ================
// =======================================

// const stats = [
//     {
//         src: "icons/medal-solid.svg",
//         alt: "Experience",
//         title: "8 ans",
//         description: "d'expérience"
//     },
//     {
//         src: "icons/code-solid.svg",
//         alt: "Projects",
//         title: "3000",
//         description: "lignes de code par jour"
//     },
//     {
//         src: "icons/mug-hot-solid.svg",
//         alt: "Coffee mug",
//         title: "8000",
//         description: "litres de café consommés"
//     },
//     {
//         src: "icons/face-smile-beam-regular.svg",
//         alt: "Happy clients",
//         title: "100%",
//         description: "de clients satisfaits"
//     },
// ]

// const MainStats = () => {
//     return (
//         <section id="stats" className="h-screen">
//             <h2>Quelques chiffres intéressants</h2>
//             {stats.map((stat, index) => (
//                 <div key={index}>
//                     <img src={stat.src} alt={stat.alt} width={50} height={50} />
//                     <h3>{stat.title}</h3>
//                     <p>{stat.description}</p>
//                 </div>
//             ))}
//         </section>
//     )
// }

// =======================================
// =============== Skills ================
// =======================================

const MainSkills = () => {
    const skillRef = useRef(null);

    useEffect(() => {
        const el = skillRef.current;
        gsap.fromTo(el, { opacity: 0 }, {
            opacity: 1, duration: 3, scrollTrigger: {
                trigger: el,
                start: "top 40%",
            }
        })
    }, [])

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
    return (
        <section id="services" className="flex flex-col justify-center items-center h-screen">
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