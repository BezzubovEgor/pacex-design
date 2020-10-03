import { FlattenInterpolation } from 'styled-components';

export interface StylesMap<T = Record<string, unknown>> {
    [type: string]: FlattenInterpolation<T>;
}

export interface WithVariant<T = string> {
    variant: T;
}
