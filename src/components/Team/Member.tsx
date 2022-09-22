import React from 'react'
import styled from 'styled-components'
import { Grid } from '../../UI/Layout'
import BackgroundImg from '../../containers/atoms/BackgroundImg'
import ImportantText from '../../containers/atoms/ImportantText'
import PageTitle from '../../containers/atoms/PageTitle'
import SlideCircles from '../../containers/molecules/slideCircles'
import TitledText from '../../containers/molecules/TitledText'

const SMember = styled.div`
    scroll-snap-align: center;
    height: 100vh;
`
function Member({ children }: { children: any }) {
    return (
        <SMember>
            <Grid styleProps={{ rows: "6", height: "100%" }}>
                <PageTitle styleProps={{ row: "3/4" }}>Members</PageTitle>

                <BackgroundImg style={{ overflow: "hidden" }} styleProps={{ row: "1/4", }}>
                    <img src="https://source.unsplash.com/400x800/?digital" alt="Logo" />

                </BackgroundImg>
                <TitledText styleProps={{ row: "4/5" }} title="Ruben A.">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    <ImportantText> when </ImportantText>.
                </TitledText>
                <SlideCircles styleProps={{ row: "6" }}></SlideCircles>

                <></>
            </Grid>
        </SMember>

    )
}

export default Member