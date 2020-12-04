import { css } from 'styled-components';

export const fontSize = css`
  ${({ fontSize }) => `font-size: ${fontSize || 12}px;`}
`;
