import { css } from 'styled-components';

export const centered = css`
  ${({ centered }) => centered && `margin: 0 auto;`}
`;
