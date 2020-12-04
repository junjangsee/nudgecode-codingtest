import { css } from 'styled-components';

export const block = css`
  ${({ block }) =>
    block &&
    `
      display: block;
    `};
`;
