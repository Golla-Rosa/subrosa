import { ITheme } from "./ITheme";

export interface IStyleProps {
    width?: string;
    height?: string;

    bgColor?: "primary" | "primary-light" | "primary-dark" | "secondary" | "secondary-light" | "secondary-dark" | string;
    textColor?: string;

    display?: string;
    justifyContent?: "center" | "start" | "end" | "flex-start" | "flex-end" | "left" | "right" | "space-between" | "space-around" |"space-evenly" | "stretch";
    alignItems?: "normal" | "stretch" | "center" | "start" | "end" | "flex-start" | "flex-end" | "self-start" | "self-end"
    
    overflow?: string;
    xOverflow?: string;
    yOverflow?: string;

    columns?: string;
    rows?: string;
    gap?: string;

    column?: string;
    row?: string;

    //Flex
    wrap?: "wrap" | "reverse" | "no";
    direction?: "row" | "row-reverse" | "column" | "column-reverse";

    //Flex item
    grow?: number;
    shrink?: 1 | 0;
    flex?: string;

    //fonts
    fontSize?: string;
    textAlign?: string;

    // containers
    shape?: string;

    alignSelf?: string;

    // borders
    shadow?: "soft" | "thick";
    borders?: "eased" | "strict" ;
    position?: "fixed";
}

export interface IElementProps {
    props?: any;
    styleProps?: IStyleProps; //styleProps
    children?: JSX.Element[];
    theme?: ITheme;
}