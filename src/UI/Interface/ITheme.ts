export interface ITheme {
    primary?: IThemeColor;
    secondary?: IThemeColor;
    accent?: IThemeColor;
    default?: IThemeColor;
    
    lightText?: "black" | "white";
    darkText?: "black" | "white";
}

export interface IThemeColor {
    color: string;
    text: "white" | "black";
}