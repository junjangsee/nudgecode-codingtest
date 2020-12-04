import React from 'react';
import Container from '../../atoms/container';
import COLORS from '../../../shared/colors';
import { SearchContainer, Input } from './style';

const Search = ({ searchUsers }) => {
  const [searchValue, setSearchValue] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    searchUsers(searchValue);
  };

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <>
      <Container
        flexBox
        margin="0 0 20px 0"
        padding="6px 10px 6px 0"
        height={29}
        background={COLORS.gray}
        borderRadius={5}
      >
        <SearchContainer>
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="검색"
              onChange={handleChange}
              value={searchValue}
            />
          </form>
        </SearchContainer>
      </Container>
    </>
  );
};

export default Search;
