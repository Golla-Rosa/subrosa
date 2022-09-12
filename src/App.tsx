import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Grid, FlexBox } from 'C:/Users/golla/Desktop/Dev/experiences/CreativeCoding/LP/react-packages/src/Layout'
import { ThemedSection } from 'C:/Users/golla/Desktop/Dev/experiences/CreativeCoding/LP/react-packages/src/Themes'
import { ITheme } from '../../../../experiences/CreativeCoding/LP/react-packages/src/Interface/ITheme'
import { Card } from '../../../../experiences/CreativeCoding/LP/react-packages/src/Molecules/Cards/Card'
import { colors } from './theme'
import Projects from './components/Projects'
import Navbar from './components/Navbar'
import Team from './components/Team'
import Manifest from './components/Manifest'
import Landing from './components/Landing'
import styled from 'styled-components'

const SResponsive = styled.div`
@media screen and (max-width: 600px) {
    margin-left: 2rem;
    margin-right: 2rem;
}

@media screen and (max-width: 1200px) {
  margin-left: 3rem;
  margin-right: 3rem;
}

@media screen and (max-width: 2600px) {
  margin-left: 30rem;
  margin-right: 30rem;
}
`

function App() {
  return (
    <ThemedSection theme={colors}>
      <FlexBox  styleProps={{ direction: "column", bgColor: "primary", }}>
        <Navbar styleProps={{bgColor: "primary"}}></Navbar>
        <SResponsive>

        <Landing styleProps={{ height: "100vh", bgColor: "primary" }}></Landing>
        <Manifest styleProps={{}}></Manifest>
        <Projects styleProps={{}}></Projects>
        <Team styleProps={{}}></Team>
        </SResponsive>
      </FlexBox>
      <></>
    </ThemedSection>
  )
}

export default App
