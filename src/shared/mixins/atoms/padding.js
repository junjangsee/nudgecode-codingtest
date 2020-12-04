import { css } from 'styled-components';

export const padding = css`
  ${({ padding }) => padding && `padding: ${padding};`}
`;
