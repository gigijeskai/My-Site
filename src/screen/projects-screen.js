import React, {useState} from "react";
import Layout from "../components/Layout";
import { Container, Stack, Button } from "../components/styled";
import ProjectCard from "../components/ProjectCard";
import ProjectDetail from "../components/ProjectDetail";
import { useTheme } from "../context/Context";

const ProjectsScreen = () => {

  const { isLightTheme, toggleTheme } = useTheme();

    const lightModeClass = 'light-mode';
    const darkModeClass = 'dark-mode';
  
    const themeClass = isLightTheme ? lightModeClass : darkModeClass;


    const [selectedProject, setSelectedProject] = useState(null);

const projects = [
    {
        logoSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        title: "Dark-Mode",
        githubLink: "https://github.com/gigijeskai/dark-mode",
        description: "Progetto React creato come esercitazione per un corso, enfatizzando l'implementazione della Dark Mode. Utilizza classi CSS, props e lo stato di React per gestire dinamicamente lo stile in base al tema scuro. Ottima introduzione a concetti fondamentali di React per principianti.",
        publicationDate: "2024-02-20",
        fullDescription:"Progetto React sviluppato come parte di un corso formativo, con particolare attenzione all'implementazione della Dark Mode. Questo progetto fa ampio uso di classi CSS, proprietà (props), e dello stato di React per gestire in modo dinamico lo stile dell'applicazione, consentendo una transizione fluida tra il tema chiaro e quello scuro. La sua struttura fornisce un'ottima introduzione ai concetti fondamentali di React, fornendo agli utenti principianti una solida base per comprendere l'uso di componenti, proprietà, e lo stato all'interno di un'applicazione React. L'accento sull'implementazione della Dark Mode offre un ulteriore livello di apprendimento pratico, illustrando come React possa essere impiegato per migliorare l'esperienza utente attraverso funzionalità dinamiche e personalizzate legate al design."
      },{
        logoSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        title: "React-Cart",
        githubLink: "https://github.com/gigijeskai/react-cart",
        description: "Realizzato come esercitazione per approfondire il contesto di React, questo carrello web offre un'esperienza di acquisto intuitiva. Sfrutta il contesto per gestire lo stato del carrello in modo centralizzato, rendendo semplice l'aggiunta e la rimozione di prodotti. Progetto ideale per acquisire familiarità con la gestione dello stato globale in React.",
        publicationDate: "2024-02-20",
        fullDescription: "Questo progetto è stato sviluppato con l'obiettivo di approfondire le conoscenze nel contesto di React, focalizzandosi sulla creazione di un carrello web che offre un'esperienza di acquisto intuitiva. La sua implementazione si distingue per l'utilizzo del contesto in React, il quale consente di gestire in modo centralizzato lo stato del carrello. Grazie a questa architettura, il processo di aggiunta e rimozione di prodotti dal carrello diventa estremamente agevole e intuitivo. Si tratta di un progetto che si rivela particolarmente utile per coloro che desiderano acquisire familiarità con la gestione dello stato globale in React, fornendo un'applicazione pratica delle best practices e delle funzionalità offerte da questo framework."
      },{
        logoSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        title: "Cocktail-App",
        githubLink: "https://github.com/gigijeskai/cocktail-app",
        description: "Realizzata come esercizio pratico per un corso su React, questa applicazione offre un'esperienza interattiva di esplorazione di cocktail. Sfrutta il Context API per la gestione dello stato, implementa rotte per una navigazione fluida tra le pagine e si collega a API esterne per ottenere dettagli e ricette di cocktail. Un progetto ideale per acquisire competenze avanzate su React e sviluppo web dinamico.",
        publicationDate: "2024-02-20",
        fullDescription: "Elaborata come parte di un esercizio pratico all'interno di un corso focalizzato su React, questa applicazione rappresenta un'immersione avanzata nell'universo dello sviluppo web interattivo. Grazie all'impiego del Context API, l'app gestisce in modo efficiente lo stato, offrendo un'esperienza fluida e coinvolgente nella scoperta del mondo dei cocktail. La sua architettura prevede l'implementazione di rotte per agevolare la navigazione tra diverse pagine, mentre si connette a API esterne per recuperare dettagli e ricette dettagliate sui cocktail. Questo progetto si configura come un ambiente ideale per acquisire competenze avanzate su React e per approfondire la creazione di applicazioni web dinamiche e interattive."
      },{
        logoSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        title: "Nft-store",
        githubLink: "https://github.com/gigijeskai/nft-store",
        description: "Simulazione di un'app React che replica l'esperienza di acquisto di NFT. Progettato come esercitazione avanzata, l'app sfrutta API esterne per visualizzare NFT, utilizza Redux per gestire lo stato globale, implementa paginazione e effetti di caricamento con skeleton screens. Include anche una simulazione di pagamento e gestisce le rotte per una navigazione fluida. Offre un'esperienza pratica su concetti avanzati di React, Redux e integrazione con API esterne.",
        publicationDate: "2024-02-20",
        fullDescription:"L'app React di simulazione dell'acquisto di NFT offre un'esperienza coinvolgente e avanzata per gli sviluppatori desiderosi di approfondire le loro competenze in React, Redux e integrazione con API esterne. Questa applicazione è stata progettata come esercitazione avanzata per consentire agli utenti di esplorare concetti sofisticati e praticare le migliori pratiche nello sviluppo di applicazioni web moderne. La simulazione si basa sull'utilizzo di API esterne per recuperare e visualizzare NFT, enfatizzando la manipolazione dello stato globale attraverso la libreria Redux. La gestione dello stato globale è essenziale per mantenere coerente l'applicazione durante l'interazione dell'utente con diverse componenti e schermate.Per migliorare l'esperienza utente, l'applicazione implementa la paginazione, consentendo agli utenti di navigare facilmente attraverso un grande numero di NFT. Inoltre, sono stati introdotti effetti di caricamento utilizzando skeleton screens, che contribuiscono a fornire un feedback visivo immediato durante il caricamento dei dati. Un altro aspetto notevole di questa simulazione è la simulazione di pagamento, che aggiunge un livello di realismo all'esperienza di acquisto di NFT. Questo aspetto pratico consente agli sviluppatori di comprendere meglio l'implementazione di funzionalità transazionali e interazioni complesse all'interno di un'app React. Infine, l'app gestisce le rotte in modo efficiente per garantire una navigazione fluida all'utente. L'utilizzo di rotte ben strutturate contribuisce a organizzare l'applicazione in modo modulare e fornisce un'esperienza utente coerente e intuitiva. In sintesi, questa simulazione rappresenta un ambiente di apprendimento avanzato che abbraccia concetti complessi di sviluppo React, Redux e integrazione API. È un'opportunità pratica per gli sviluppatori di affinare le loro competenze e acquisire una comprensione approfondita della creazione di applicazioni web avanzate e interattive.",
      },{
        logoSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        title: "Meteo-App",
        githubLink: "https://github.com/gigijeskai/meteo-app",
        description: "Applicazione meteo sviluppata con JavaScript Vanilla, sfruttando API esterne per ottenere dati in tempo reale. Fornisce informazioni meteorologiche dettagliate, inclusi dati sulla temperatura, condizioni atmosferiche e previsioni. Un progetto pratico per acquisire competenze nell'utilizzo di API e manipolazione dinamica del DOM con JavaScript puro.",
        publicationDate: "2024-02-20",
        fullDescription:"L'applicazione meteo è stata creata utilizzando JavaScript Vanilla, senza l'ausilio di framework o librerie esterne, mettendo in pratica le competenze nel linguaggio di programmazione. La sua funzionalità principale è quella di fornire informazioni meteorologiche dettagliate, sfruttando API esterne per ottenere dati in tempo reale e offrire agli utenti una visione accurata delle condizioni atmosferiche. L'interfaccia utente è stata progettata per essere intuitiva e user-friendly. Gli utenti possono facilmente navigare attraverso le diverse sezioni per ottenere informazioni specifiche sulle condizioni meteorologiche. La visualizzazione dei dati è stata implementata dinamicamente, consentendo agli utenti di ottenere aggiornamenti in tempo reale senza dover ricaricare la pagina. La principale fonte di dati per l'applicazione è costituita da API esterne, che forniscono dati meteorologici aggiornati. Questi dati includono informazioni sulla temperatura corrente, le condizioni atmosferiche, la velocità del vento e altre metriche rilevanti. La manipolazione dei dati è stata gestita con JavaScript, consentendo una personalizzazione e una presentazione ottimizzata delle informazioni. Il progetto serve come esempio pratico per acquisire competenze nell'utilizzo di API e nella manipolazione dinamica del Document Object Model (DOM) utilizzando JavaScript puro. Gli sviluppatori possono imparare a gestire richieste asincrone, analizzare e interpretare i dati restituiti dalle API e aggiornare dinamicamente l'interfaccia utente in base alle nuove informazioni ricevute. Complessivamente, l'applicazione meteo rappresenta un progetto didattico completo che consente agli sviluppatori di ampliare le proprie competenze in JavaScript, API esterne e manipolazione dinamica del DOM attraverso un'applicazione pratica e funzionale.",
      },
];

const handleResetClick = (callback) => {
    setSelectedProject(null);
    if (callback) {
      callback(); // Chiamare il callback fornito
    }
  };

const handleProjectClick = (projectId) => {
    setSelectedProject(projectId);
  };

  return (
    <Layout>
      <Container
      size="fullwidth"
        width="100%"
        className={themeClass}
        >
        {selectedProject ? (
  <ProjectDetail
    project={projects.find((p) => p.title === selectedProject)}
    onClose={() => handleResetClick()}
  />
        ) : (
            <>
        <Stack justify="center" pt="2rem" pb="2rem">
          <h2 className="title">Projects</h2>
        </Stack>
          <Stack
            direction={["column" ,"row"]}
            p="2rem"
            justify="center"
            style={{ flexWrap: "wrap", gap: "3rem", rowGap: "3rem" }}
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                onClick={() => handleProjectClick(project.title)}
              />
            ))}
          </Stack>
          </>
        )}
        {/* {selectedProject && (
            <Stack
            justify="center" 
            pt="2rem"
            pb="2rem"
            >
            <Button variant="text" onClick={handleResetClick}>Back</Button>
            </Stack>
            )} */}
      </Container>
    </Layout>
  );
};

export default ProjectsScreen;