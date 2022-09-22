import {useState} from 'react'
import * as React from "react";
import { IElementProps } from '../Interface/IStyleProps'
import {ITheme} from '../Interface/ITheme'
import { ThemeProvider } from 'styled-components';
export function ThemedSection({props, styleProps, children, theme } : IElementProps)  {
  const [themes, setTheme] = useState<ITheme | undefined>(theme || undefined);
  return (
    <ThemeProvider theme={themes}>
      {children}
    </ThemeProvider>
  )
}
