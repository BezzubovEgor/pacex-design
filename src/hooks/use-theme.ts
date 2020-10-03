import React from 'react';

import { defaultTheme } from '../constants/default-theme';
import { Theme } from '../interfaces/Theme';

export const ThemeContext = React.createContext<Theme>(defaultTheme);

export function useTheme() {
    const theme = React.useContext(ThemeContext);
    return theme;
}
