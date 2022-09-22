import React from 'react'
import styled from 'styled-components'
import { SBox } from '../../../../../experiences/CreativeCoding/LP/react-packages/src'

const SCircle = styled.div`
    width: 14px;
    height: 14px;
    border-radius: 100%;
    opacity: 50%;
    background: ${props => props.active ? "red" : "#6b6a8f"};
    &:hover,
    &:focus {
      color: palevioletred;
    }
    &:active {
        color: red;
    }

`

function Circle({ active }: { active: boolean }) {
    return (
        <SCircle onClick={() => alert('hello')} active={active} />
    )
}

export default Circle