import { css } from 'styled-components';

export const flexColumnCentered = css`
  ${({ flexColumnCentered }) =>
    flexColumnCentered &&
    `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;`}
`;
