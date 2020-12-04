import React from 'react';
import Container from '../../components/atoms/container';
import Text from '../../components/atoms/text';
import Search from '../../components/contact/search';
import COLORS from '../../shared/colors';

const ContactPage = () => {
  return (
    <Container flexRowCentered height="100vh">
      <Container width={375} height={667} padding="20px 16px 0 16px">
        <Text block fontSize={23} fontWeight={600} margin="0 0 15px 0">
          연락처
        </Text>
        <Search />
      </Container>
    </Container>
  );
};

export default ContactPage;
