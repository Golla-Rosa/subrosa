import React from 'react'
import { FlexBox } from '../../UI/Layout'
import Circle from '../atoms/Circle'

function SlideCircles() {
    return (
        <FlexBox styleProps={{ alignItems: "center", justifyContent: "center", gap: "5px" }}>
            <Circle active></Circle>
            <Circle active={false}></Circle>
            <Circle active={false}></Circle>

        </FlexBox>
    )
}

export default SlideCircles