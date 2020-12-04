import React from 'react';
import Container from '../../atoms/container';
import Text from '../../atoms/text';
import { ProfileContainer, ProfileContent, FavoriteContainer } from './style';

const User = ({
  name,
  phoneNumber,
  profileImage,
  isFavorite,
  handleToggled,
}) => {
  const [favorite, setFavorite] = React.useState(isFavorite);

  const makePhoneNumber = (phoneNumber) => {
    return phoneNumber.replace(
      /(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/,
      '$1-$2-$3',
    );
  };

  const handleToggleFavorite = () => {
    setFavorite(() => !favorite);
    handleToggled(name, favorite);
  };

  return (
    <>
      <Container margin="0 0 20px 0">
        <ProfileContainer flex>
          <Container flex>
            <Container width={48} height={48} margin="0 15px 0 0">
              <img width={48} height={48} src={profileImage} />
            </Container>
            <ProfileContent flexColumnCentered>
              <Text fontSize={18} fontWeight={600} margin="0 0 10px 0" block>
                {name}
              </Text>
              <Text fontSize={15} fontWeight={400}>
                {makePhoneNumber(phoneNumber)}
              </Text>
            </ProfileContent>
          </Container>
          <FavoriteContainer
            width={20}
            height={20}
            margin="0 12px 0 0"
            onClick={() => handleToggleFavorite()}
          >
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
