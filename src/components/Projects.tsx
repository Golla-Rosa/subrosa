import React from 'react'
// import { Grid } from '../../../../../experiences/CreativeCoding/LP/react-packages/src/Layout'
import styled from 'styled-components'

const Grid = styled.div`
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    grid-auto-rows: 240px;
    @media screen and (max-width: 600px) {
    grid-auto-rows: 120px;
     
    }
`
const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #353535;
    font-size: 3rem;
    color: #fff;
    box-shadow: rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem, rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem;
    height: 100%;
    width: 100%;
    border-radius: 4px;
    transition: all 500ms;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 0;
    margin: 0;

    
`

const TallCard = styled(Card)`
@media screen and (min-width: 600px) {
      grid-row: span 2 / auto;
}
@media screen and (max-width: 600px) {
    grid-row: span 1 / auto;
}
      `

const WideCard = styled(Card)`
@media screen and (min-width: 600px) {
    grid-column: span 2 / auto;
}
`

type Size = "small" | "wide" | "tall";

const Project = (props: { size: Size }) => {
    var card;
    switch (props.size) {
        case "small":
            card = <Card style={{backgroundImage: `url("https://picsum.photos/800/530")`}}>S</Card>
            break;
        case "tall":
            card = <WideCard style={{backgroundImage: `url("https://picsum.photos/1200/800")`}}>W</WideCard>
            break;
        case "wide":
            card = <TallCard>T</TallCard>
            break;
    }
    return card
}
function Projects() {
    return (
        <div style={{ font: "'ABeeZee'" }}>
            <h1>Projets</h1>
            <Grid>
                <Project size="wide"></Project>
                <Project size="small"></Project>
                <Project size="wide"></Project>
                <Project size="tall"></Project>
                <Project size="small"></Project>
                <Project size="wide"></Project>
                <Project size="wide"></Project>
               
            </Grid>
        </div>
    )
}

export default Projects