import React from 'react';
import Container from '../../atoms/container';
import COLORS from '../../../shared/colors';
import { SearchContainer, Input } from './style';

const Search = () => {
  return (
    <>
      <Container
        flexBox
        padding="6px 0 6px 0"
        height={29}
        background={COLORS.gray}
        borderRadius={5}
      >
        <SearchContainer margin="0 0 20px 0" flexBox>
          <form>
            <Input type="text" placeholder="검색" />
          </form>
        </SearchContainer>
      </Container>
    </>
  );
};

export default Search;
