import { Stack } from "./styled";
import { useTheme } from '../context/Context';

const SkillCard = ({ skill, onClick }) => {

  const { isLightTheme, toggleTheme } = useTheme();

  const lightModeClass = 'light-mode';
  const darkModeClass = 'dark-mode';

  const themeClass = isLightTheme ? lightModeClass : darkModeClass;



return (
    <Stack
    className="hover zoom-hover border-hover"
    border="1px solid #05ecfc"
    borderRadius="8px"
    width={["50%", "30%", "20%"]}
    height="50px"
    align="center"
    justify="center"
    onClick={onClick}
    style={{ cursor: "pointer" }}
  >
    <h4>{skill.title}</h4>
    </Stack>
)

};

export default SkillCard;