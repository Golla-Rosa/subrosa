import React from 'react'
import styled from 'styled-components'

const SHeading = styled.h1`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;700&display=swap');

    @media screen and (min-width: 1060px) {
        // width: 5%;
        width: 80%;

    }
    @media screen and (max-width: 1060px) {
        // width: 13%;
        width: 80%;
        
    }
    @media screen and (max-width: 600px) {
        // width: 25%;
        width: 25%;
        
    }
    left: 25%;
    border-bottom: 1px solid red;
    font-family: 'Inter', sans-serif;
    font-size: 25px;
    text-shadow: 
      0 0 25px #fff;

    
`
function PageTitle({children} : {children: any}) {
  return (
    <SHeading>{children}</SHeading>
  )
}

export default PageTitle