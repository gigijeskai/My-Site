import React, {useState} from "react";
import Layout from "../components/Layout";
import { Container, Stack, Button } from "../components/styled";
import ExperienceCard from "../components/ExperienceCard";
import ExperienceDetail from "../components/ExperienceDetail";
import { useTheme } from '../context/Context';

const EsperiencesScreen = () => {

    const { isLightTheme, toggleTheme } = useTheme();

    const lightModeClass = 'light-mode';
    const darkModeClass = 'dark-mode';
  
    const themeClass = isLightTheme ? lightModeClass : darkModeClass;
  

const [ selectedExperience, setSelectedExperience ] = useState(null)

const experiences = [
    {
        logoSrc: ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"],
        title: "Frontend Developer",
        preview: "Gestione siti Lottomatica e Goldbet, utilizzo di linguaggi nativi e cms",
        location: "Full Remote",
        agency: "Company: SiliconDev",
        date: "05/2023 - In Corso",
        descriptions: ["La gestione dei siti web di Lottomatica e Goldbet implica la responsabilità di supervisionare e mantenere l'integrità e la funzionalità di tali piattaforme online. In questo contesto, l'utilizzo di linguaggi di programmazione nativi e sistemi di gestione dei contenuti (CMS) gioca un ruolo cruciale. I linguaggi di programmazione nativi, come ad esempio HTML, CSS e JavaScript, vengono utilizzati per implementare funzionalità dinamiche e interattive nei siti web. Allo stesso tempo, l'impiego di CMS consente una gestione più efficiente e scalabile del contenuto online, semplificando la creazione, la modifica e la pubblicazione di informazioni sui siti.",
    "Nel caso specifico di Lottomatica e Goldbet, la gestione dei siti potrebbe coinvolgere attività quali l'aggiornamento regolare del contenuto, l'implementazione di nuove funzionalità, la risoluzione di eventuali problemi tecnici e l'ottimizzazione delle performance del sito. Queste attività richiedono una conoscenza approfondita dei linguaggi di programmazione utilizzati e la capacità di navigare efficacemente attraverso i sistemi di gestione dei contenuti adottati da entrambe le piattaforme.",
    "Complessivamente, il ruolo di gestione dei siti per Lottomatica e Goldbet richiede competenze tecniche avanzate, una comprensione approfondita delle esigenze specifiche del settore del gioco d'azzardo online e la capacità di garantire un'esperienza utente ottimale attraverso una gestione accurata e attenta dei siti web coinvolti.",
    ]
    },{
        logoSrc: ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"],
        title: "Academy Front-end Developer",
        preview: "Bootcamp formativo 300 Ore",
        location: "Full Remote",
        agency: "Adecco Formazione",
        date: "02/2023 - 04/2023",
        descriptions: [
            "Il bootcamp finanziato da Adecco, della durata di 300 ore, ha fornito una formazione intensiva focalizzata sulla programmazione front-end. Il corso si è concentrato sull'apprendimento avanzato del framework React, insieme ad altre tecnologie chiave come TypeScript, linguaggi nativi e Bootstrap.",
            "La struttura del corso prevedeva otto ore giornaliere, divise equamente tra teoria e pratica, con un approccio intensivo di quattro ore di lezioni seguite da quattro ore di esercitazioni pratiche.",
            "Al termine del corso era previsto un esame finale per valutare le competenze e conoscenze acquisite, consolidando così la preparazione per affrontare sfide professionali nel campo della programmazione front-end."
        ]
    }, {
        logoSrc: ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" , "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" , "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"],
        title: "Bootcamp Front-end Developer",
        preview: "Bootcamp formativo 600 Ore",
        location: "Full Remote",
        agency: "Epicode",
        date: "08/2022 - 01/2023",
        descriptions: [
            "Il bootcamp di 600 ore organizzato da Epicode è stato progettato per offrire un approfondito percorso di apprendimento nella programmazione front-end, focalizzandosi sull'utilizzo professionale del framework Angular. Rivolto a partecipanti senza precedenti esperienze nel campo, il corso si è proposto di guidare gli studenti dalla base, partendo da zero, verso una competenza avanzata nei principali strumenti e tecnologie del settore.",
            "Durante il bootcamp, gli studenti hanno avuto l'opportunità di acquisire competenze pratiche e teoriche attraverso un'intensa programmazione di 8 ore al giorno. La suddivisione delle attività comprendeva 4 ore dedicate alla teoria, mirate a fornire una solida comprensione concettuale dei concetti, e 4 ore di sessioni pratiche. Queste ultime hanno consentito agli studenti di applicare immediatamente ciò che avevano appreso, garantendo una consolidazione efficace delle competenze acquisite.",
            "Le tecnologie insegnate nel corso hanno abbracciato un ampio spettro di strumenti fondamentali per un professionista del front-end. Tra queste figurano React, TypeScript, linguaggi di programmazione nativi, Bootstrap e Sass. L'inclusione di Angular come framework principale ha fornito agli studenti una solida base per la creazione di applicazioni web complesse e altamente performanti.",
            "Al termine del bootcamp, gli studenti hanno affrontato un esame finale per valutare la loro comprensione e competenza nelle tecnologie apprese. Questo ha costituito un momento chiave per valutare il raggiungimento degli obiettivi formativi e consolidare la preparazione per entrare con fiducia nel mondo della programmazione front-end professionale. In sintesi, il bootcamp di 600 ore di Epicode ha offerto un percorso completo e intensivo per trasformare gli aspiranti sviluppatori in professionisti esperti nel campo della programmazione front-end.",
        ]
    },
];

const handleResetClick = () => {
    setSelectedExperience(null);
  };

const handleExperienceClick = (experienceId) => {
    setSelectedExperience(experienceId);
  };

    return (
<Layout>
    <Container
    className={themeClass}
    width="100%"
    size="fullwidth"
    height="100%"
    >
        {selectedExperience ? (
  <ExperienceDetail
  experience={experiences.find((p) => p.title === selectedExperience)}
  />
        ) : (
            <Stack
            direction="column"
            align="center"
            >
        <Stack
        justify="center" 
        pt="2rem">
<h2 className="title">Experiences</h2>
        </Stack>
        <Stack
        direction="column"
        p="2rem"
        width="80%"
        style={{ rowGap: "2rem" }}
        >
        {experiences.map((experience, index) => (
              <ExperienceCard
                key={index}
                experience={experience}
                onClick={() => handleExperienceClick(experience.title)}
              />
            ))}
        </Stack>
        </Stack>
        )}
        {selectedExperience && (
        <Stack
            justify="center" 
            pt="2rem"
            >
            <Button variant="text" onClick={handleResetClick}>Back</Button>
            </Stack>
             )}
    </Container>
</Layout>
    );
};

export default EsperiencesScreen;