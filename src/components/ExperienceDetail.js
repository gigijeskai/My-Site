import React from "react";
import { Stack, Button } from "./styled";

const ExperienceDetail = (
    { experience, onClose }) =>
     {
        return (
            <Stack 
        direction="column"
        padding="2rem"
        height={["none","none","100vh"]}
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
                <hr />

                <Button pt="1rem"  variant="text" onClick={onClose}>
          Back
        </Button> 
            </Stack>
        )
     }

     export default ExperienceDetail;