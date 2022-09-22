import * as React from 'react'
import styled from 'styled-components'
import { IElementProps } from '../Interface/IStyleProps'
import { Container, SContainer } from './Container'


export const SSquare = styled(SContainer)`
    height: ${props => props.height};
    width: ${props => props.height};
`
export function Square({styleProps, props, children} : IElementProps) {
  return (
    <SSquare overflow={styleProps?.overflow} bgColor={styleProps?.bgColor} height={styleProps?.height}>{children}</SSquare>
  )
}
