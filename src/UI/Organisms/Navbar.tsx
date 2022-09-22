import * as React from 'react'
import { FlexBox } from '../Layout/Flexbox'
import { Grid } from '../Layout/Grid'
import { Card } from '../Molecules/Cards/Card';

export function Navbar() {
    return (
        <div>

            <Card styleProps={{ shadow: "thick", borders: "strict", shape: "rectangle", width: "100%", height: "100vh", overflow: "hidden" }}>
                <FlexBox styleProps={{ gap: "10px", direction: "column", justifyContent: "flex-start" }}>
                    {/* // /HEADER */}


                    <Card styleProps={{ shadow: "soft", borders: "strict", bgColor: "primary", height: "100px", shape: "rectangle", row: "1/3", overflow: "hidden" }}>
                        <h1>Sonalyse</h1>
                    </Card>


                    <Card styleProps={{  shape: "rectangle", height: "100px", overflow: "hidden" }}>
                        <FlexBox styleProps={{ alignItems: "center", justifyContent: "center" }}>
                            <h2>Menu</h2>
                        </FlexBox>
                    </Card>
                    <Card styleProps={{ shadow: "soft", bgColor: "default", shape: "rectangle", height: "40px", overflow: "hidden" }}>
                        <FlexBox styleProps={{ alignItems: "center", justifyContent: "space-around" }}>
                            <a>logo</a>
                            <a>Dashboard</a>
                            <a>icon</a>
                        </FlexBox>
                    </Card>
                    <Card styleProps={{ shadow: "thick", bgColor: "default", shape: "rectangle", height: "40px", overflow: "hidden" }}>
                        <FlexBox styleProps={{ alignItems: "center", justifyContent: "space-around" }}>
                            <a>logo</a>
                            <a>Configuration</a>
                            <a>icon</a>
                        </FlexBox>
                    </Card>
                </FlexBox>
                <FlexBox styleProps={{ alignItems: "center", justifyContent: "center" }}>

                </FlexBox>
                <></>
            </Card>
        </div>

    )
}
