import React from 'react';
import Container from '../../atoms/container';
import Text from '../../atoms/text';
import { ProfileContainer, ProfileContent, FavoriteContainer } from './style';

const User = ({ name, phoneNumber, profileImage }) => {
  const isFavorite = true;

  return (
    <>
      <Container margin="0 0 20px 0">
        <ProfileContainer flex>
          <Container flex>
            <Container width={48} height={48} margin="0 15px 0 0">
              <img
                width={48}
                height={48}
                src="https://storage.googleapis.com/snuper-static/mock_users/1.svg"
              />
            </Container>
            <ProfileContent flexColumnCentered>
              <Text fontSize={18} fontWeight={600} margin="0 0 10px 0" block>
                기길동
              </Text>
              <Text fontSize={15} fontWeight={400}>
                010-2664-8657
              </Text>
            </ProfileContent>
          </Container>
          <FavoriteContainer width={20} height={20} margin="0 12px 0 0">
            <img
              src={
                isFavorite
                  ? 'https://storage.googleapis.com/snuper-static/mock_users/heart_filled.svg'
                  : 'https://storage.googleapis.com/snuper-static/mock_users/heart_empty.svg'
              }
              alt="like"
            />
          </FavoriteContainer>
        </ProfileContainer>
      </Container>
    </>
  );
};

export default User;
