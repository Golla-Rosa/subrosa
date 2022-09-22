import * as React from 'react';
import styled from "styled-components";
import { SBox } from "..";
import { IElementProps } from "../Interface/IStyleProps";


const handleShape = (shape: string | undefined) => {
    switch (shape) {
        case "rounded":
            return "50px 50px 50px 50px";

            break;
        case "none":
            return null;
            break;
        case "circle":
            return "100%";
            break;
    }
}

export const SContainer = styled(SBox)`
    //${props => handleShape(props.shape)};
    // overflow: ${props => props.overflow};
    overflow-y: ${props => props.yOverflow}; 
    overflow-x: ${props => props.xOverflow};
`

export function Container({ props, styleProps, children }: IElementProps) {
    console.log("container", children)
    return <SContainer {...styleProps}>
        {children}
    </SContainer>
}