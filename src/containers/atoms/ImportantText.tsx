import React from 'react'
import styled from 'styled-components'

const SImportantText = styled.a`
    opacity: 100%;
    color: white;
`

function ImportantText({ children }: { children: any }) {
    return (
        <SImportantText>{children}</SImportantText>
    )
}

export default ImportantText