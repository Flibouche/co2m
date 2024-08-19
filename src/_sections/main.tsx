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
        src: "",
        title: "",
        description: "",
    }
]

const MainServices = () => {
    return (
        <div>

        </div>
    )
}

const MainPortfolio = () => {
    return (
        <div>

        </div>
    )
}

const MainNewsletter = () => {
    return (
        <div>

        </div>
    )
}

const MainContact = () => {
    return (
        <div>

        </div>
    )
}

export default Main;