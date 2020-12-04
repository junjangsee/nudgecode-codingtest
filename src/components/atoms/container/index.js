import styled from 'styled-components';
import {
  width,
  height,
  margin,
  padding,
  maxWidth,
  minHeight,
  borderRadius,
  background,
  backgroundColor,
  textAlign,
  centered,
  flexBox,
  flexRowCentered,
  flexColumnCentered,
} from '../../../shared/mixins';

export default styled.div`
  box-sizing: border-box;

  ${width};
  ${height};
  ${margin};
  ${padding};
  ${maxWidth};
  ${centered};
  ${textAlign};
  ${minHeight};
  ${flexBox};
  ${flexRowCentered};
  ${flexColumnCentered};
  ${backgroundColor};
  ${borderRadius};
  ${background}
`;
