import { css } from 'styled-components';

export const fontWeight = css`
  ${({ fontWeight }) => fontWeight && `font-weight: ${fontWeight};`}
`;
