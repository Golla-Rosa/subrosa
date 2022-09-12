import React from 'react'
import styled from 'styled-components'

// Titled text is a styled component that takes a title as a text

const SHeading = styled.h1`
    @media screen and (min-width: 1060px) {
        width: 5%;
    }
    @media screen and (max-width: 1060px) {
        width: 13%;
        
    }
    @media screen and (max-width: 600px) {
        width: 25%;
        
    }
    left: 25%;
        border-bottom: 1px solid red;
`

function TitledText({ title, body }: { title: string, body: string }) {
    return (
        <div>
            <SHeading>{title}</SHeading>
            <div>{body}</div>

        </div>
    )
}

export default TitledText