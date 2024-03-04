import styled from "styled-components";
import { 
    space, 
    layout, 
    flexbox, 
    border, 
    position, 
    color, 
    typography, 
    shadow, 
    background, 
    grid,
    compose, 
    variant,
} from 'styled-system';

const Box = styled('div')(
    variant({
        variants: {
            contentWrapper: {
                position: "relative",
                zIndex: 1,
        },
    },
    }),
    variant({
        variants: {
            textWrapper: {
                color: "",
        },
    },
    }),
    compose(
        space, 
        layout, 
        flexbox, 
        border, 
        position, 
        color, 
        typography, 
        shadow, 
        background, 
        grid
    )
);

export default Box;