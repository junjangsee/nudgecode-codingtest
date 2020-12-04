import { css } from 'styled-components';

export const backgroundColor = css`
  ${({ backgroundColor }) =>
    backgroundColor && `background-color: ${backgroundColor || '#ffffff'};`}
`;
