import React from 'react'
import styled from 'styled-components'

const STitle = styled.h1`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;700&display=swap');

  font-size: 33px;
  font-weight: bold;
  font-family: 'Inter', sans-serif;
  margin: 4px 0px;
`

function Title({children} : {children : any}) {
  return (
    <STitle>{children}</STitle>
  )
}

export default Title