import { css } from 'styled-components';

export const lineHeight = css`
  ${({ lineHeight }) => lineHeight && `line-height: ${lineHeight};`}
`;
