import {IStyleProps} from "./IStyleProps";

export interface IFlexStyleProps extends IStyleProps {
    wrap?: "wrap" | "reverse" | "no";
    direction?: "row" | "row-reverse" | "column" | "column-reverse";
}

export interface IFlexItemProps extends IFlexStyleProps {
    grow?: number;
    shrink?: 1 | 0;
}

export interface IElementFlexProps {
    props?: any;
    styleProps: IFlexStyleProps; //styleProps
    children?: JSX.Element[];
}