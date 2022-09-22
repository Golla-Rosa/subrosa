import React from 'react'
import styled from 'styled-components'
import { FlexBox, Grid } from '../UI/Layout'
import Button from '../containers/atoms/Button'
import Divider from '../containers/atoms/Divider'
import ImportantText from '../containers/atoms/ImportantText'
import Paragraph from '../containers/atoms/Paragraph'
import Title from '../containers/atoms/Title'

const SLanding = styled.div`
    scroll-snap-align: center;
    height: 100vh;
`

function Landing() {
    return (
        <SLanding style={{}}>
            <Grid styleProps={{ height: "100%", rows: "24", justifyContent: "space-around" }}>
                <FlexBox styleProps={{ row: "14", direction: "column" }}>
                    <Title>Art &</Title>
                    <Title>Artisanat</Title>
                    <Title>Numérique</Title>
                    <Divider styleProps={{}}></Divider>


                </FlexBox>
                <Paragraph styleProps={{ row: "15" }}>d  not only five centuries, but also the leap into electronic typesetting,d not only five centuries, but also the leap into electronic typesetting,d not only <ImportantText>five centuries</ImportantText>, but also the leap into electronic typesetting,d not <ImportantText>only</ImportantText> five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </Paragraph>
                <FlexBox styleProps={{ row: "21", justifyContent: "center" }}>

                    <Button ></Button>
                </FlexBox>
            </Grid>
        </SLanding>
    )
}

export default Landing