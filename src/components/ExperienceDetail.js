import React from "react";
import { Stack } from "./styled";

const ExperienceDetail = (
    { experience }) =>
     {
        return (
            <Stack 
        direction="column"
        padding="2rem"
        height={["288vh","117vh","82vh"]}
        >
            <Stack
            direction="column"
            >
            <h2>{experience.title}</h2>
            <p>{experience.agency} - {experience.location}</p>
            <p>{experience.date}</p>
            </Stack>
            <hr />
            <Stack
            mt="1rem"
            style={{ flexWrap: "wrap" }}
            >
            {experience.logoSrc.map((logo, index) => 
    (<img key={index} 
        src={logo} 
        alt={experience.title} 
        width="50" height="50" 
        style={{ margin: "0.5rem" }} 
        />))}            
        </Stack>
        <hr />
              <Stack
              mt="1rem"
              direction="column"
              >
                {experience.descriptions.map((description, index) =>
                (<p key={index}>{description}</p>))}
                </Stack>  
            </Stack>
        )
     }

     export default ExperienceDetail;