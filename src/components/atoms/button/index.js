import styled from 'styled-components';
import {
  margin,
  padding,
  color,
  fontSize,
  fontWeight,
  borderRadius,
  backgroundColor,
  flexColumnCentered,
  flexRowCentered,
  flexBox,
  height,
} from '../../../shared/mixins';
import COLORS from '../../../shared/colors';

export default styled.button`
  color: ${COLORS.white};
  box-sizing: border-box;

  ${margin};
  ${padding};
  ${color};
  ${fontSize};
  ${fontWeight};
  ${backgroundColor};
  ${borderRadius};
  ${flexBox};
  ${flexColumnCentered};
  ${flexRowCentered};
  ${height}
`;
