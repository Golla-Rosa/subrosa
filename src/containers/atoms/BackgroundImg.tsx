import React from 'react'
import styled from 'styled-components'

const SBackground = styled.div`
    position: absolute;
    opacity: 15%;
    margin: 0px;
    left: -10px;
    max-width:100%;
    max-height:100%;
`

function BackgroundImg({ children }: { children: any }) {
    return (
        <SBackground>{children}</SBackground>
    )
}

export default BackgroundImg