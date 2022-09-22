import * as React from 'react'
import styled from 'styled-components'
import { IElementProps } from '../Interface/IStyleProps'
import { SContainer } from './Container'


export const SRectangle = styled(SContainer)`
    height: ${props => props.height};
    width: ${props => props.width};
`
export function Rectangle({ styleProps, props, children }: IElementProps) {
    return (
        <SRectangle overflow={styleProps?.overflow} bgColor={styleProps?.bgColor} height={styleProps?.height} width={styleProps?.width}>
            {children}
        </SRectangle>
    )
}
