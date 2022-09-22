import * as React from 'react'
import styled from 'styled-components'
import { SCircle } from '../../Containers/Circle'
import { Rectangle, SRectangle } from '../../Containers/Rectangle'
import { Square } from '../../Containers/Square'
import { IElementProps, IStyleProps } from '../../Interface/IStyleProps'
import { useState } from 'react'

const getBorder = (shadow : IStyleProps["shadow"], border : IStyleProps["borders"]) : string => {
    var bordersCSS = "";
    switch (border) {
        case "eased":
            bordersCSS += `border-radius: 15px 15px 15px 15px ;`;
            break;
        case "strict":
            bordersCSS += `border-radius: 0px 0px 0px 0px;`;
            break;
    }
    switch(shadow) {
        case "soft":
            bordersCSS += `box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.2);`;
            break;
        case "thick":
            bordersCSS += `box-shadow: 5px 0px 16px 4px rgba(0,0,0,0.1), 
            0px 8px 16px rgba(0,0,0,0.1);`
            break;
        case undefined:
            break;
        
    }
    console.log([bordersCSS])
    return bordersCSS;
}

export const SRoundedCard = styled(SCircle)`
    border: 1px solid grey;
    // box-shadow: 1px 5px 5px;
`
export const SRectCard = styled(SRectangle)`
    // border-radius: 5px 5px 5px 5px;
    // border: 0.01px solid grey;
    
    ${props => getBorder(props?.shadow, props?.borders)};
`


export function Card({ props, children, styleProps }: IElementProps) {
    return (
        styleProps?.shape === "rectangle" ?
            <SRectCard borders={styleProps?.borders} shadow={styleProps?.shadow} overflow={styleProps?.overflow} width={styleProps?.width} height={styleProps?.height} bgColor={styleProps?.bgColor}>
                {children}
            </SRectCard> :
            <SRoundedCard overflow={styleProps?.overflow} width={styleProps?.width} height={styleProps?.height} bgColor={styleProps?.bgColor}>
                {children}
            </SRoundedCard>
    )
}
