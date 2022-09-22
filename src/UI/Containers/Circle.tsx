import * as React from 'react';
import styled from 'styled-components'
import { IElementProps } from '../Interface/IStyleProps';
import { FlexBox } from '../Layout/Flexbox';
import { Container, SContainer } from './Container'
import { SSquare } from './Square';

export const SCircle = styled(SSquare)`
    border-radius: 100%;
  
`
export function Circle({props, styleProps, children } : IElementProps) {
  return (
    <SCircle overflow={styleProps?.overflow} height={styleProps?.height} bgColor={styleProps?.bgColor}>
        {/* <FlexBox styleProps={{direction:"column", alignItems: "center", justifyContent:"center"}}>
        </FlexBox> */}
        {children}
    </SCircle>
  )
}
