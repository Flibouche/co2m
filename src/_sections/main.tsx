import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

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
        <div ref={circle} className="flex flex-col items-center">
            <img src="/logo.png" alt="CO2M's logo" />
            <h1 className="hidden">CO2M</h1>
            <h2>WebDesign & Communication</h2>
        </div>
    )
}

const MainAbout = () => {
    return (
        <div className="flex flex-col items-center">
            <h2>A propos de la société</h2>
            <blockquote>
                <p>CO2M, société spécialisée dans le domaine du webdesign et de la communication, vous accompagnera dans tous vos projets : création de site internet, développement d'application mobile, design de cartes de visite / affiches / flyers…</p>
                <cite>Maxime METTEY, CEO</cite>
            </blockquote>
        </div>
    )
}

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
        <div>
            <h2>Quelques chiffres intéressants</h2>
            {stats.map((stat, index) => (
                <div key={index}>
                    <img src={stat.src} alt={stat.alt} width={50} height={50} />
                    <h3>{stat.title}</h3>
                    <p>{stat.description}</p>
                </div>
            ))}
        </div>
    )
}

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
        <div>
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
        </div>
    )
}

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
        <div>
            <h2>Nos services</h2>
            {services.map((service, index) => (
                <div key={index}>
                    <img src={service.src} alt={service.alt} width={50} height={50} />
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                </div>
            ))}
        </div>
    )
}

const projects = [
    {
        src: "portfolio/fluriservices.webp",
        alt: "Fluri Services",
        title: "Fluri Services - Site web",
        description: "Fluri Services, après avoir travaillé avec nous pour son activité de taxi, souhaitait mettre en avant son activité de livraison et transport de marchandises."
    },
    {
        src: "portfolio/kaely-greenhouse.webp",
        alt: "Kaëly Greenhouse",
        title: "Kaëly Greenhouse - Site web",
        description: "Lancée dans la vente de produits cosmétiques et bien-être, Kaëly Greenhouse avait besoin d’un site vitrine pour présenter son activité et faciliter le contact avec les clients."
    },
    {
        src: "portfolio/maxime-mettey.webp",
        alt: "Maxime Mettey",
        title: "Maxime Mettey - Site web",
        description: "Le gérant de l'agence CO2M - WebDesign & Communication a réalisé à ses débuts un site web portfolio, afin de présenter ses créations et augmenter sa crédibilité."
    },
    {
        src: "portfolio/white-buchery.webp",
        alt: "White Buchery",
        title: "White Buchery - Site web",
        description: "Le groupe Franc-Comtois White Butchery, de style Death Metal / Deathcore, avait besoin d’un site internet pour partager ses dernières actualités, ses dates de concert et ses photos."
    },
    {
        src: "portfolio/print-cartes-de-visite-kaely-greenhouse.webp",
        alt: "Cartes de visite Kaëly Greenhouse",
        title: "Kaëly Greenhouse - Cartes de visite",
        description: "Lancée dans la vente de produits cosmétiques et bien-être, Kaëly Greenhouse avait besoin de cartes de visites pour faire de la prospection."
    },
    {
        src: "portfolio/print-cartes-de-visite-maxime-mettey.webp",
        alt: "Cartes de visite Maxime Mettey",
        title: "Maxime Mettey - Cartes de visite",
        description: "Avant de lancer l'agence CO2M, je travaillais sous mon propre nom. Découvrez ma toute première carte de visite."
    },
    {
        src: "portfolio/print-cartes-de-visite-kaiden-shop.webp",
        alt: "Cartes de visite Kaïden Shop",
        title: "Kaïden Shop - Cartes de visite",
        description: "En parallèle à leur Site e-commerce, nous avons également réalisé les cartes de visite de Kaïden Shop – Prêt-à-porter féminin et Dépôt-vente femmes & enfants."
    },
    {
        src: "portfolio/print-cartes-de-visite-co2m.webp",
        alt: "Cartes de visite CO2M",
        title: "CO2M - Cartes de visite",
        description: "Dans l'optique de créer une carte de visite à l'image de la société, nous avons regroupé les idées qui nous poussent depuis le lancement de l'agence."
    },
    {
        src: "portfolio/kaidenshop.webp",
        alt: "Kaïden Shop",
        title: "Kaïden Shop - Site web e-commerce",
        description: "Kaïden Shop, ayant récemment lancé son activité de vente de prêt-à-porter féminin et dépôt vente femmes & enfants, avait besoin de se positionner sur Internet pour pouvoir agrandir son périmètre d'activité. C'est pour cela que nous leur avons proposé un site e-commerce !"
    }
]

const MainPortfolio = () => {
    return (
        <div>
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
                        <img src={project.src} alt={project.alt} width={250} height={250} />
                        <div className='absolute top-0 left-0 text-black'>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
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
        </div>
    )
}

const MainNewsletter = () => {
    return (
        <div>
            <h2>Restez informés avec notre newsletter</h2>
            <form id="newsletter" action="#">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" placeholder="Entrez votre adresse e-mail" />
                <button type="submit">Envoyer</button>
            </form>
        </div>
    )
}

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
        <div>
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

                    <label htmlFor="message">message</label>
                    <textarea id="message" placeholder="Entrez votre message" required></textarea>

                    <button type="submit">Envoyer</button>
                </form>
            </div>
        </div>
    )
}

export default Main;