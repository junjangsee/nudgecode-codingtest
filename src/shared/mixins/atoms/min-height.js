import { css } from 'styled-components';

export const minHeight = css`
  ${({ minHeight }) =>
    minHeight &&
    `min-height: ${
      typeof minHeight === 'string' ? minHeight : `${minHeight}px`
    };`}
`;
