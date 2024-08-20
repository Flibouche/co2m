import { Link } from "react-router-dom";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { projects } from '../data/projects';

const Main = () => {
    return (
        <main className="flex justify-center flex-1">
            <div className="w-full max-w-[1120px] flex flex-col items-center justify-around gap-[30px] px-[10px] py-[10px]">
                <MainHero />
                <MainAbout />
                <MainStats />
                <MainSkills />
                <MainServices />
                <MainPortfolio />
                <MainNewsletter />
                <MainContact />
            </div>
        </main>
    )
}

// =======================================
// ================= Hero ================
// =======================================

const MainHero = () => {
    const circle = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.to(circle.current, {
            rotation: "+=360",
            duration: 3,
            repeat: -1,
            ease: "none"
        });
    });

    return (
        <section id="hero" ref={circle} className="flex flex-col items-center">
            <img src="/logo.png" alt="CO2M's logo" />
            <h1 className="hidden">CO2M</h1>
            <h2>WebDesign & Communication</h2>
        </section>
    )
}

// =======================================
// ================ About ================
// =======================================

const MainAbout = () => {
    return (
        <section id="about" className="flex flex-col items-center">
            <h2>A propos de la société</h2>
            <blockquote>
                <p>CO2M, société spécialisée dans le domaine du webdesign et de la communication, vous accompagnera dans tous vos projets : création de site internet, développement d'application mobile, design de cartes de visite / affiches / flyers…</p>
                <cite>Maxime METTEY, CEO</cite>
            </blockquote>
        </section>
    )
}

// =======================================
// ================ Stats ================
// =======================================

const stats = [
    {
        src: "icons/medal-solid.svg",
        alt: "Experience",
        title: "8 ans",
        description: "d'expérience"
    },
    {
        src: "icons/code-solid.svg",
        alt: "Projects",
        title: "3000",
        description: "lignes de code par jour"
    },
    {
        src: "icons/mug-hot-solid.svg",
        alt: "Coffee mug",
        title: "8000",
        description: "litres de café consommés"
    },
    {
        src: "icons/face-smile-beam-regular.svg",
        alt: "Happy clients",
        title: "100%",
        description: "de clients satisfaits"
    },
]

const MainStats = () => {
    return (
        <section id="stats">
            <h2>Quelques chiffres intéressants</h2>
            {stats.map((stat, index) => (
                <div key={index}>
                    <img src={stat.src} alt={stat.alt} width={50} height={50} />
                    <h3>{stat.title}</h3>
                    <p>{stat.description}</p>
                </div>
            ))}
        </section>
    )
}

// =======================================
// =============== Skills ================
// =======================================

const skills = [
    {
        title: "Design",
        progress: 85
    },
    {
        title: "Développement web",
        progress: 95
    },
    {
        title: "Développement mobile",
        progress: 90
    },
]

const MainSkills = () => {
    return (
        <section id="skills">
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

const services = [
    {
        src: "icons/laptop-code-solid.svg",
        alt: "Laptop code",
        title: "Développement web",
        description: "Création de sites vitrine et e-commerce, optimisés, esthétiques et accessibles depuis tous les appareils.",
    },
    {
        src: "icons/mobile-screen-button-solid.svg",
        alt: "Mobile phone",
        title: "Développement mobile",
        description: "Améliorez la présence de votre société en créant votre application multi-plateforme, compatible Android / iOS."
    },
    {
        src: "icons/paintbrush-solid.svg",
        alt: "Paintbrush",
        title: "Design",
        description: "Création de logos, cartes de visite, affiches, pancartes, flyers, goodies, marquage automobile, t-shirts..."
    },
]

const MainServices = () => {
    return (
        <section id="services">
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
        <section id="portfolio">
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
        <section id="newsletter">
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

const contacts = [
    {
        src: "icons/mobile-solid.svg",
        alt: "Mobile phone",
        title: "(+33)(0)7 66 27 30 34",
    },
    {
        src: "icons/location-pin-solid.svg",
        alt: "Location pin",
        title: "25200 Montbéliard, France",
    },
    {
        src: "icons/envelope-solid.svg",
        alt: "Envelope",
        title: "maxime@co2m.net"
    },
]

const MainContact = () => {
    return (
        <section id="contact">
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