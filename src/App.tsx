import './App.css'
import { Grid, FlexBox } from './UI/Layout'
import { ThemedSection } from './UI/Themes'
import { colors } from './theme'

import Projects from './components/Projects/Projects'
import Navbar from './components/Navbar'
import Team from './components/Team'
import Manifest from './components/Manifest'
import Landing from './components/Landing'
import styled from 'styled-components'
import Project from './components/Projects/Project'
import Member from './components/Team/Member'
import Menu from './components/Menu'

const SResponsive = styled.div`
@media screen and (max-width: 600px) {
    margin-left: 2rem;
    margin-right: 2rem;
}

@media screen and (max-width: 1200px) {
  margin-left: 3rem;
  margin-right: 3rem;
}

@media screen and (min-width: 1200px, max-width: 2600px) {
  margin-left: 20rem;
  margin-right: 20rem;
}
@supports (scroll-snap-type: y mandatory) {
    height: 100vh;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
}
    `

function App() {
  return (
    <ThemedSection theme={colors}>
      <Navbar styleProps={{ position: "fixed", bgColor: "primary" }}></Navbar>
      <FlexBox styleProps={{ direction: "column", bgColor: "primary", }}>
        {/* <Menu></Menu> */}
        <SResponsive>
          <Landing styleProps={{ height: "800px", bgColor: "primary" }}></Landing>
          <Manifest styleProps={{ height: "800px" }}></Manifest>
          <Project></Project>
          <Member></Member>
        </SResponsive>
      </FlexBox>
      <></>
      <></>
    </ThemedSection >
  )
}

export default App
