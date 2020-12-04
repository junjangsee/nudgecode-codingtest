import { css } from 'styled-components';
import COLORS from '../../colors';

export const color = css`
  ${({ color }) => color && `color: ${color || COLORS.black};`}
`;
