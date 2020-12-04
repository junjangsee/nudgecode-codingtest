import { css } from 'styled-components';

export const margin = css`
  ${({ margin }) => margin && `margin: ${margin};`}
`;
