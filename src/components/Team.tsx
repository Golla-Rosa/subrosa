import React from 'react'
import styled from 'styled-components'
import { Grid } from '../UI/Layout'

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


function Team() {
    return (
        <div>
            <h1>L'équipe</h1>
            <br />
            <br />
            <Grid styleProps={{gap: "20px", columns: "3", rows: "3"}}>
                <Card>A</Card>
                <Card>A</Card>
                <Card>A</Card>

            </Grid>
        </div>
    )
}

export default Team