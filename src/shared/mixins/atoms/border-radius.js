import { css } from 'styled-components';

export const borderRadius = css`
  ${({ borderRadius }) => borderRadius && `border-radius: ${borderRadius}px;`}
`;
