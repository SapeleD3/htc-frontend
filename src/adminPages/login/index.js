import React, { useEffect } from 'react';
import { Flex, Stack } from '@chakra-ui/react';
import LoginForm from './LoginForm';

const AdminLogin = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Stack flex='1' bg='#463A80'>
        <Flex justify='center' margin='auto' padding={['3', '10']} flex='1'>
          <LoginForm />
        </Flex>
      </Stack>
    </>
  );
};

export default AdminLogin;
