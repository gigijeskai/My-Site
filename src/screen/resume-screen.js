import React, { useState } from "react";
import Layout from "../components/Layout";
import { Container, Button, Stack } from "../components/styled";
import { useTheme } from '../context/Context';

const ResumeScreen = () => {

    const { isLightTheme, toggleTheme } = useTheme();

  const lightModeClass = 'light-mode';
  const darkModeClass = 'dark-mode';

  const themeClass = isLightTheme ? lightModeClass : darkModeClass;


    const [downloadCount, setDownloadCount] = useState(166);


const handleDownload = () => {

    setDownloadCount((prevCount) => prevCount + 1);

    const pdfLink = process.env.PUBLIC_URL + "https://drive.google.com/file/d/1QN3QXkhOSqOsfL4oEfTMY5MBJkZ8Atu3/view?usp=drive_link";

window.open(pdfLink, "_blank");

};

    return (
<Layout>
    <Container
    className={themeClass}
    width="100%"
    size="fullwidth"
    height="100vh"
    >
        <Stack
        direction="column"
        align="center"
        pt="17%"
        >
            <h2 className="title">
                Scarica il mio CV
            </h2>
            <p>CV Views: {downloadCount}</p>

        <Button
        pt="2rem"
         variant="text" 
         onClick={handleDownload}
         >
            Download CV
         </Button>
         </Stack>
    </Container>
</Layout>
    );
};

export default ResumeScreen;