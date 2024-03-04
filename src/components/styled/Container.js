import styled from 'styled-components';
// questo è un componente variants, che permette di passare delle props e di avere dei valori predefiniti
// in base a quelle props. In questo caso, la prop size può essere "fullWidth", "xl", "md", "sm", "xs"
// e in base a quella prop, il componente avrà delle proprietà predefinite.


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

const Container = styled('div')(
variant({
    prop: "size",
    variants: {
fullWidth: {
    maxWidth: "100%",
    width: "100%",
    },
    xl:{
        maxWidth: "1240px",
        width: "calc(100% - 40px)",
    },
    md: {
        maxWidth: "768px",
        width: "calc(100% - 24px)",
    },
    sm: {
        maxWidth: "568px",
        width: "calc(100% - 12px)",
    },
    xs: {
        maxWidth: "440px",
        width: "calc(100% - 6px)",
    },
    },
    }),

variant({
    variants: {
        containerWrapper: {
            width: "100%",
            position: "relative",
            height: "100%",
            overflow: "hidden",
        },
    },
}),
variant({
    variants: {
        containerBg: {
            size: "fullwidth",
            backgroundImage: 'url("")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            overflow: "hidden",
            height: "100vh",
            width: "100vw",
            margin: "0px",

            "&:before": {
                content: "",
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                background: "rgba(0, 0, 0, 0.3)", /* colore grigio con opacità del 20% */
            },
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
    grid,
)
);

Container.defaultProps = {
    ml: "auto",
    mr: "auto",
    size: "xl",
}

// questo è un modo per affibbiare delle props predefinite al componente, in modo che se non vengono passate
// da nessuna parte, il componente avrà comunque delle prop predefinite.

    export default Container;