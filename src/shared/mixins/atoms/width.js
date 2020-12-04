import { css } from 'styled-components';

export const width = css`
  ${({ width }) =>
    width && `width: ${typeof width === 'string' ? width : `${width}px`}`}
`;
