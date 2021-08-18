import React from 'react';
import { Flex, Stack } from '@chakra-ui/react';
import LoginForm from './LoginForm';
import AppFooter from '../../components/AppFooter';

const Login = () => {
  return (
    <>
      <Stack flex='1' bg='#E5E5E5'>
        <Flex justify='center' margin='auto' padding={['3', '10']} flex='1'>
          <LoginForm />
        </Flex>
        <AppFooter />
      </Stack>
    </>
  );
};

export default Login;
