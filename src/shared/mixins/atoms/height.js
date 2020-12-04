import { css } from 'styled-components';

export const height = css`
  ${({ height }) =>
    height && `height: ${typeof height === 'string' ? height : `${height}px`}`}
`;
