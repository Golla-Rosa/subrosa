import styled from 'styled-components'
import { Grid } from '../UI/Layout'
import ImportantText from '../containers/atoms/ImportantText'
import PageTitle from '../containers/atoms/PageTitle'
import Paragraph from '../containers/atoms/Paragraph'
import SlideCircles from '../containers/molecules/slideCircles'
import TitledText from '../containers/molecules/TitledText'

const Manifesto = [
    {
        title: "L'émancipation par le",
        subtitle: "numérique",
        body: <Paragraph>

            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            <ImportantText> when </ImportantText>an unknown printer took a galley of type and scrambled it to make a type specimen
            book. It has survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Paragraph>
    }
]

const SManifest = styled.div`
    scroll-snap-align: center;
    height: 100vh;
`

function Manifest() {
    return (
        <SManifest>
            <Grid styleProps={{ rows: "6", height: "100%" }}>
                <PageTitle styleProps={{ row: "3/4" }}>Manifeste</PageTitle>
                <TitledText styleProps={{ row: "4/5" }} title={<>L'émancipation par le <a style={{ color: "red" }}>numérique</a></>}>
                    <ImportantText>Lorem Ipsum</ImportantText> is simply dummy text of the <ImportantText>printing</ImportantText> and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    Lorem <ImportantText>Ipsum is </ImportantText>simply dummy text of the printing and typesetting industry.
                </TitledText>
                <SlideCircles styleProps={{ row: "6" }}></SlideCircles>
                <></>
            </Grid>
        </SManifest>
    )
}

export default Manifest