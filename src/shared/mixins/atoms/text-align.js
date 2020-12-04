import { css } from 'styled-components';

export const textAlign = css`
  ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
`;
