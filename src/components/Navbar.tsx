import React from 'react'
import styled from 'styled-components'
import { FlexBox } from '../UI/Layout'

const LogoSection = () => {
    return (
        <div style={{ justifySelf: "start", width: "100%" }}><p>Subrosa</p></div>
    )
}

const SNavbar = styled.div`
        position: fixed;
        border-bottom: 1px solid red;
        width: 100vw;
`

function Navbar() {
    return (
        <SNavbar>
            <FlexBox styleProps={{ justifyContent: "space-between", height: "60px", width: "100%", bgColor: "primary" }}>
                <div></div>
                <LogoSection style={{ }}>SUBROSA</LogoSection>
                <div style={{ width: "100%" }}></div>
            </FlexBox>
        </SNavbar>
    )
}

export default Navbar