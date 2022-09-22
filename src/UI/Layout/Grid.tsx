import * as React from 'react';
import {SItem, SGrid} from '../'
import {IElementProps} from "../Interface/IStyleProps";

export function Grid({props, styleProps, children } : IElementProps)  {
    const childrenTab : JSX.Element[] | undefined = children?.map((c : JSX.Element) => <SItem row={c.props?.styleProps?.row} column={c.props?.styleProps?.column} >{c}</SItem>)
    return <SGrid {...styleProps}>{childrenTab}</SGrid>
}

