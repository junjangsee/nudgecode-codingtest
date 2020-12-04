import { css } from 'styled-components';

export const flexBox = css`
  ${({ flex }) => flex && `display: flex;`}
`;
