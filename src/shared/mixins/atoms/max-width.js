import { css } from 'styled-components';

export const maxWidth = css`
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth}px;`}
`;
