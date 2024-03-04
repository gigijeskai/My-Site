import React, {useState} from "react";
import { Stack, Box } from "./styled";
import { useTheme } from '../context/Context';

const ProjectCard = ({ project, onClick }) => {

  const { isLightTheme, toggleTheme } = useTheme();

  const lightModeClass = 'light-mode';
  const darkModeClass = 'dark-mode';

  const themeClass = isLightTheme ? lightModeClass : darkModeClass;


  const [isHovered, setIsHovered] = useState(false);

  return (
    
      <Stack
        className="tre-d-card border-hover"
        border="1px solid #05ecfc"
        borderRadius="10px"
        direction="column"
        align="start"
        p="2rem"
        mb="2rem"
        width={["100%","40%","30%"]}
        justify="space-between"
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ cursor: "pointer" }}
      >
        <img style={{ width: "2rem" }} src={project.logoSrc} alt="framework or technologis logo" />

        <Stack align="center" justify="space-between" width="100%" pt="1rem">
          <h4>{project.title}</h4>
          <a className="zoom-hover border-hover" href={project.githubLink} target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-link-45deg" viewBox="0 0 16 16">
              <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z" />
              <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z" />
            </svg>
          </a>
        </Stack>
        <hr style={{ width: "100%" }} />
        <Stack width="100%" direction="column" pt="1rem">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </Stack>
        <Stack pt="1rem"
        align="center"
        >
            <svg style={{marginRight: "8px"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar-week" viewBox="0 0 16 16">
              <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"/>
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
            </svg>
            {project.publicationDate}
        </Stack>
        <hr style={{ width: "100%", paddingBottom: "1rem" }} />
        <Stack>
          <img style={{ width: "1rem" }} src={project.logoSrc} alt="framework or technologis logo" />
        </Stack>
      </Stack>
  );
}

export default ProjectCard;