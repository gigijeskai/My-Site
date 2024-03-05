import React from "react";
import{ Container, Stack, Button } from "../components/styled";

const SkillDetail = ({ skill, onClose }) => {

  
  return (
    <Container>
        <Stack 
        direction="column"
        pt="2rem"
        align="center"
        >
      <img style={{width: "25%", paddingBottom: "2rem"}} src={skill.imageSource} alt="Immagine del div cliccato" />
<hr style={{width: "100%"}}/>
      <h2
    style={{paddingBottom: "1rem", paddingTop: "2rem"}}
    >{skill.title}</h2>
      <p style={{paddingBottom: "2rem"}}>{skill.text}</p>
      <hr style={{width: "100%"}}/>
      <Button pt="1rem"  variant="text" onClick={onClose}>
          Back
        </Button>
      </Stack>
    </Container>
  );
};

export default SkillDetail;