import styled from 'styled-components';
import {
  margin,
  padding,
  fontSize,
  fontWeight,
  lineHeight,
  color,
  block,
} from '../../../shared/mixins';
import COLORS from '../../../shared/colors';

export default styled.span`
  color: ${COLORS.white};

  ${fontSize};
  ${fontWeight};
  ${lineHeight};
  ${block};
  ${margin};
  ${padding};
  ${color};
`;
