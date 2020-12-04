import styled from 'styled-components';
import Container from '../../atoms/container';
import COLORS from '../../../shared/colors';

export const SearchContainer = styled(Container)`
  position: relative;
  padding: 0 0 0 25px;

  &::after {
    content: '';
    background: url('https://storage.googleapis.com/snuper-static/mock_users/search.svg');
    background-size: 14px 14px;
    background-repeat: no-repeat;
    width: 14px;
    height: 14px;
    position: absolute;
    left: 8px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const Input = styled.input`
  width: 100%;

  &::placeholder {
    font-size: 15px;
    color: ${COLORS.black};
  }
`;
