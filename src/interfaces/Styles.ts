import { FlattenInterpolation } from 'styled-components';

export interface StylesMap<T = object> {
    [type: string]: FlattenInterpolation<T>;
}

export interface WithVariant<T = string> {
    variant: T;
}
