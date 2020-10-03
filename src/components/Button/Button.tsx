import React, { memo } from 'react';
import { compose, setDisplayName } from 'recompose';
import styled, { css } from 'styled-components';

import { WithVariant } from '../../interfaces/Styles';
import { getStyleVariant } from '../../utils/styles.utils';
import { themeValue, withTheme } from '../../utils/theme.utils';

export enum ButtonVariants {
    primary = 'primary',
    default = 'default',
    link = 'link',
}

export interface ButtonProps extends WithVariant<ButtonVariants> {
    href?: string;
    onClick: (event?: React.MouseEvent) => void;
}

const useVariant = getStyleVariant({
    [ButtonVariants.default]: css`
        border-color: ${themeValue('secondary')};
        background: #fff;
    `,
    [ButtonVariants.primary]: css`
        border-color: ${themeValue('primary')};
        background: ${themeValue('primary')};
        color: #fff;
    `,
    [ButtonVariants.link]: css`
        color: ${themeValue('primary')};
        border: none;
        background: none;
    `,
});

const StyledButton = styled.button<ButtonProps>`
    border: 1px solid;
    border-radius: 2px;
    padding: 4px 15px;
    color: #000;
    font-size: 14px;
    height: 32px;
    cursor: pointer;
    ${useVariant}
`;

const Link = StyledButton.withComponent('a');

export const Button = compose<ButtonProps, ButtonProps>(
    withTheme,
    memo,
    setDisplayName('Button'),
)(({ variant = ButtonVariants.default, ...props }: ButtonProps) => {
    const extendedProps = { ...props, variant };
    const ButtonComponent: React.ComponentType<ButtonProps> = props.href ? Link : StyledButton;
    return <ButtonComponent {...extendedProps} />;
});
