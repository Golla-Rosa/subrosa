import React from 'react'
import { FlexBox } from '../../../../../experiences/CreativeCoding/LP/react-packages/src/Layout'

function Landing() {
    return (
        <div style={{ height: "100%", opacity: "100%" }}>
            <FlexBox styleProps={{ alignItems: "center", direction: "column", justifyContent: "space-around" }}>
                <div>
                    <p style={{ fontSize: "3rem" }}>Art & Artisanat</p>
                    <a style={{ fontSize: "3rem" }}>Numérique</a>
                </div>
            </FlexBox>
        </div>
    )
}

export default Landing