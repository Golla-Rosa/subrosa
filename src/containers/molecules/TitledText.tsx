import React from 'react'
import styled from 'styled-components'
import Paragraph from '../atoms/Paragraph'
import Title from '../atoms/Title'

// Titled text is a styled component that takes a title as a text



function TitledText({ title, children }: { title: JSX.Element, children: any }) {
    return (
        <div>
            <Title>{title}</Title>
            <Paragraph>{children}</Paragraph>

        </div>
    )
}

export default TitledText