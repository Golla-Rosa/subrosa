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
function App() {

  return (
    <ThemedSection theme={colors}>
      <FlexBox styleProps={{ direction: "column", bgColor: "primary" }}>
        <Navbar></Navbar>
        <Landing styleProps={{height: "100vh"}}></Landing>
        <Manifest styleProps={{height: "100vh"}}></Manifest>
        <Projects styleProps={{}}></Projects>
        <Team styleProps={{height: "100vh"}}></Team>
      </FlexBox>
      <></>
    </ThemedSection>
  )
}

export default App
