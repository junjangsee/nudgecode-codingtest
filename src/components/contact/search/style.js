import styled from 'styled-components';
import Container from '../../atoms/container';
import COLORS from '../../../shared/colors';

export const SearchContainer = styled(Container)`
  background: url('https://storage.googleapis.com/snuper-static/mock_users/search.svg')
    no-repeat;
  background-size: 14px;
  background-position: 8px;
  resize: both;
`;

export const Input = styled.input`
  box-sizing: border-box;
  margin: 0 0 0 25px;
  width: 90%;

  &::placeholder {
    font-size: 15px;
    color: ${COLORS.black};
  }
`;
