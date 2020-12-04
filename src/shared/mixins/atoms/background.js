import { css } from 'styled-components';

export const background = css`
  ${({ background }) => background && `background: ${background || '#ffffff'};`}
`;
