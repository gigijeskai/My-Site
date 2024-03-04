import React, {useState} from "react";
import Layout from "../components/Layout";
import { Container, Stack, Box, InputWrapper, Button } from "../components/styled";
import SkillDetail from "../components/SkillDetail";
import SkillCard from "../components/SkillCard";
import { useTheme } from '../context/Context';

const SkillsScreen = () => {

  const { isLightTheme, toggleTheme } = useTheme();

    const lightModeClass = 'light-mode';
    const darkModeClass = 'dark-mode';
  
    const themeClass = isLightTheme ? lightModeClass : darkModeClass;


    const [selectedSkill, setSelectedSkill] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

const commonTest = "Ho acquisito competenze approfondite in HTML5, CSS3 e JavaScript durante i miei corsi formativi. Attualmente, perfeziono l'utilizzo di questi linguaggi nel mio ruolo di sviluppatore web presso Lottomatica, contribuendo a progetti dinamici e interattivi."
const commonTest2 = "Ho acquisito solide competenze in TypeScript e nei principali framework di sviluppo front end attraverso la partecipazione a bootcamp formativi incentrati sull'apprendimento di React e Angular dalla versione 2 in poi. Grazie a queste esperienze, ho sviluppato una comprensione approfondita delle best practice nello sviluppo front-end, consentendomi di contribuire in modo efficace a progetti dinamici e scalabili."

const handleResetClick = () => {
    setSelectedSkill(null);
  };

const handleSkillClick = (skillId) => {
    setSelectedSkill(skillId);
}

const Skills = [
    {
        imageSource: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
        title: "HTML",
        text: commonTest
    },{
        imageSource: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
        title: "CSS",
        text: commonTest
    },{
        imageSource: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        title: "JAVASCRIPT",
        text: commonTest
    },{
        imageSource: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        title: "TYPESCRIPT",
        text: commonTest2
    },{
        imageSource: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        title: "REACT",
        text: commonTest2
    },{
        imageSource: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
        title: "ANGULAR",
        text: commonTest2
    
    }
];

const filteredSkills = Skills.filter((skill) =>
    skill.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

return (
    <Layout>
      <Container
      className={themeClass}
        width="100%"
        size="fullwidth"
        height={["none","100vh"]}
        p="2rem"
      >
        {selectedSkill ? (
          <SkillDetail
            skill={Skills.find((p) => p.title === selectedSkill)}
          />
        ) : (
          <>
            <Stack
              justify="center"
              pt="3rem"
              direction="column"
              align="center"
            >
              <h2 className="title">Skills</h2>
              <InputWrapper
              display={["none", "flex"]}
                className="hover zoom-hover"
                width="80%"
                placeholder="Search for a skill..."
                border="1px solid #05ecfc"
                mt="1rem"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Stack>
          </>
        )}

        {!selectedSkill && (
          <Stack 
          direction={['column', 'row']}
          style={{ flexWrap: "wrap", gap: "3rem", rowGap: "3rem" }}
          justify="space-evenly" 
          pt="3rem"
          align="center"
          >
            {filteredSkills.map((skill, index) => (
              <SkillCard
                key={index}
                skill={skill}
                onClick={() => handleSkillClick(skill.title)}
              />
            ))}
          </Stack>
        )}

        {selectedSkill && (
          <Stack justify="center" pt="2rem">
            <Button variant="text" onClick={handleResetClick}>
              Back
            </Button>
          </Stack>
        )}
      </Container>
    </Layout>
  );
};

export default SkillsScreen;