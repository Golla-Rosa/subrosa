import styled from 'styled-components'
import {IStyleProps} from "./Interface/IStyleProps";
import {IFlexItemProps, IFlexStyleProps} from "./Interface/IFlexStyle";
import { IThemeColor } from './Interface/ITheme';

const handleColors = (theme : IThemeColor) => {
  console.log("THEME", theme);
  var colorsCSS = "";
  colorsCSS += `background-color: ${theme.color};`;
  colorsCSS += `color: ${theme.text};`;
  return colorsCSS;
}

// const bgColorsTypes: string[] = ["primary" , "primary-light" , "primary-dark" , "secondary" , "secondary-light" , "secondary-dark"]

export const SBox = styled.div<IStyleProps>`
    width: ${props => props.width ?? ""};
    height: ${props => props.height ?? "100%"};
    ${props => {
      const obj = props.theme[props.bgColor as string];
      if (obj !== undefined)
        return handleColors(obj)
    }
    }
    display: ${props => props.display};
    position: ${props => props.position};

    // text-align: ${props => props.textAlign}
    overflow: ${props => props.overflow};

    `


// export const SContainer = styled(SBox)`
//     border-radius: ${props => props.shape};

// `

export const SGrid = styled(SBox)`
  display: grid;
  grid-template-columns: repeat(${props => props.columns}, 1fr);
  grid-template-rows: repeat(${props => props.rows}, 1fr);
  grid-gap: ${props => props.gap};
`
export const SItem = styled(SBox)`
  grid-column: ${props => props.column};
  grid-row: ${props => props.row};
`

export const SFlexBox = styled(SBox)`
  display: flex;
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  flex-direction: ${props => props.direction};
  flex-wrap: ${props => props.wrap};
  gap: ${props => props.gap};
`

export const SItemFlex = styled(SBox)`
    flex: ${props => props.flex};
    flex-grow: ${props => props.grow};
    flex-shrink:   ${props => props.shrink}; 
    align-self: ${props => props.alignSelf};
`