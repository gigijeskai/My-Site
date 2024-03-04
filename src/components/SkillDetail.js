import React from "react";
import{ Container, Stack } from "../components/styled";

const SkillDetail = ({ skill }) => {

  
  return (
    <Container>
        <Stack 
        direction="column"
        pt="2rem"
        align="center"
        height="100vh"
        >
      <img style={{width: "25%", paddingBottom: "2rem"}} src={skill.imageSource} alt="Immagine del div cliccato" />
<hr style={{width: "100%"}}/>
      <h2
    style={{paddingBottom: "1rem", paddingTop: "2rem"}}
    >{skill.title}</h2>
      <p style={{paddingBottom: "2rem"}}>{skill.text}</p>
      <hr style={{width: "100%"}}/>
      </Stack>
    </Container>
  );
};

export default SkillDetail;