import { DefaultTheme, ThemedStyledProps } from 'styled-components';

export interface Theme extends DefaultTheme {
    primary: string;
    secondary: string;
    light: string;
    muted: string;
}

export type WithTheme<P> = ThemedStyledProps<P, Theme>;
