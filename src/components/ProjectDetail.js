import React from "react";
import{  Stack, Box } from "../components/styled";


const ProjectDetail = ({project}) => {
    

    if(!project) return null;
    
   
    return (
        
        <Stack 
        direction="column"
        padding="2rem"
        height={["265vh","108vh","100vh"]}
        >
             <Stack
            justify="center" 
            pt="2rem"
            >
             <h2>{project.title}</h2>
            </Stack>

            <hr />

            <Stack
            justify="center" 
            pt="2rem"
            pb="1rem"
            >
                <Stack
                mr="2rem"
                >
            <a  className="border-hover zoom-hover" href={project.githubLink} target="_blank" rel="noreferrer">
            <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
              <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z" />
              <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z" />
            </svg>
          </a>
           <span
           style={{paddingLeft: "8px"}}
           >GitHub</span> 
          </Stack>
          <Box
          
          padding="0px 12px 3px 12px">
            <img style={{ width: "1rem" }} src={project.logoSrc} alt="framework or technologis logo" />
          </Box>
          </Stack>

          <hr />
            <p style={{paddingTop: "2rem"}}>{project.fullDescription}</p>

    </Stack>
  );
};

export default ProjectDetail;