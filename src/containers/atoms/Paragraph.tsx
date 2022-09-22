import React from 'react'
import styled from 'styled-components'

const SParagraph = styled.p`
   @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;700&display=swap');
    font-size: 13px;
    color: #6b6a8f;
    font-family: 'Inter', sans-serif;


`



export function Paragraph({ children }: { children: any }) {
  return (
    <SParagraph>{children}</SParagraph>
  )
}

export default Paragraph