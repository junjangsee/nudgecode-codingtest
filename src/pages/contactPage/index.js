import React from 'react';
import Container from '../../components/atoms/container';
import Text from '../../components/atoms/text';
import COLORS from '../../shared/colors';

const ContactPage = () => {
  return (
    <Container flexRowCentered height="100vh">
      <Container width={375} height={667} padding="20px 16px 0 16px">
        <Text fontSize={23} fontWeight={600}>
          연락처
        </Text>
      </Container>
    </Container>
  );
};

export default ContactPage;
