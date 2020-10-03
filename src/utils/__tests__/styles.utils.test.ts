import { css } from 'styled-components';

import { StylesMap } from '../../interfaces/Styles';
import { getStyleVariant } from '../styles.utils';


describe(`[Style Utils]`, () => {
    const styles: StylesMap = {
        light: css`
            color: white;
        `,
        dark: css`
            color: black;
        `,
    };

    test.each([
        ['light', styles.light],
        ['dark', styles.dark],
    ])(`Should return '%s' style variant`, (variant, expected) => {
        expect(getStyleVariant(styles)({ variant })).toEqual(expected);
    })
});
