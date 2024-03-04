import {
    space,
    layout,
    border,
    flexbox,
    color,
    position,
    compose
} from 'styled-system';
import styled from 'styled-components';
import {css} from '@styled-system/css'

// questo componente si occuperà di gestire il flexbox, non ha il gap
// per essere compatibile con tutti i browser

const StackWrapper = styled("div")(
    ( {
        childrenMarginTop,
        childrenMarginBottom,
        childrenMarginRight,
        childrenMarginLeft,
        align,
        justify,
        direction
    }) => css ({
display: "flex",
alignItems: align,
justifyContent: justify,
flexDirection: direction,
// questo selettore fa applicare lo stile a tutti gli elementi figli del div
"& > * + *" : {
    marginTop: childrenMarginTop,
    marginBottom: childrenMarginBottom,
    marginLeft: childrenMarginLeft,
    marginRight: childrenMarginRight,
},
    }),
    compose(
        flexbox,
        border,
        layout,
        color,
        space,
        position,
        )
    );

    const Stack = ({
        align,
        justify,
        direction,
        spacing,
        children,
        ...rest
    }) => {
        return (
            <StackWrapper
            {...rest}
            align={align}
            justify={justify}
            direction={direction}
            childrenMarginTop = {direction === "column" ? spacing : 0}
            childrenMarginBottom = {direction === "column-reverse" ? spacing : 0}
            childrenMarginLeft = {direction === "row" ? spacing : 0}
            childrenMarginRight = {direction === "row-reverse" ? spacing : 0}
            >
                {children}
            </StackWrapper>
        )
    }

    export default Stack
