import { css } from 'styled-components';

export const flexRowCentered = css`
  ${({ flexRowCentered }) =>
    flexRowCentered &&
    `display: flex;
    justify-content: center;
    align-items: center;`}
`;
