import React from 'react'
import styled from 'styled-components'

const SButton = styled.button`
    background: rgb(253, 0, 0, 61%);
    width: 128px;
    height: 33px;
    border-radius: 23px;
    color: white;
    border: 0px;
`

function Button() {
  return (
    <SButton>CTA</SButton>
  )
}

export default Button