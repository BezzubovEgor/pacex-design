import React from 'react';

import { useTheme } from '../hooks/use-theme';
import { Theme, WithTheme } from '../interfaces/Theme';

export function withTheme<T>(Comp: React.ComponentType<T>) {
    return function WithThemeWrapper(props: T) {
        const theme = useTheme();
        return <Comp theme={theme} {...props} />;
    };
}

export function themeValue(property: keyof Theme) {
    return (props: WithTheme<object>) => props?.theme?.[property];
}
