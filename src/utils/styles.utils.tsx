import { StylesMap, WithVariant } from '../interfaces/Styles';

export function getStyleVariant<T>(map: StylesMap<T>) {
    return ({ variant }: WithVariant) => map[variant];
}
