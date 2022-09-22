import React from 'react'
import styled from 'styled-components'
import { Grid } from '../UI/Layout'
import Title from '../containers/atoms/Title'


const SMenu = styled.div`
    height: 100vh;
    position: absolute;
    width: 100%;
    background: rgb(11, 2, 45, 85%);
`

function Menu() {
    return (
        <SMenu>
            <Grid styleProps={{rows: "6"}} >
            <></>
            <FlexBox styleProps={{row: "4", height: "50%", alignItems: "center", justifyContent: "center", direction: "column",  }}>
                <Title>Acceuil</Title>
                <Title>Manifest</Title>
                <Title>Projets</Title>
                <Title>Equipe</Title>
            </FlexBox>
            </Grid>

        </SMenu>
    )
}

export default Menu