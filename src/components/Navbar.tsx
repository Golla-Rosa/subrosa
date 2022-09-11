 import React from 'react'
import { FlexBox } from '../../../../../experiences/CreativeCoding/LP/react-packages/src/Layout'
import { Card } from '../../../../../experiences/CreativeCoding/LP/react-packages/src/Molecules/Cards/Card'
 
const LogoSection = () => {
    return (
    <div style={{justifySelf: "start", width: "100%"}}><p>Subrosa</p></div>
)}

function Navbar() {
   return (
        <FlexBox styleProps={{justifyContent: "space-between", height: "50px", width: "100%"}}>
            <LogoSection></LogoSection>
            <div style={{width: "100%"}}>2</div>
            <div style={{width: "100%"}}>3</div>
        </FlexBox>
   )
 }
 
 export default Navbar