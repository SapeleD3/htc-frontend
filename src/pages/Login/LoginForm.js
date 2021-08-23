import { Flex, Button, Text, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import CustomInput from '../../components/Input';
import { useHistory } from 'react-router';
import { PUBLIC_PATHS } from '../../app/constants';
import { userLogin } from './login.api';

export default function LoginForm() {
  const history = useHistory();
  const toast = useToast();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');

  const login = () => {
    setLoading(true);
    userLogin(
      setLoading,
      {
        email,
        password,
      },
      toast
    );
  };

  return (
    <Flex justifyContent='center' height='100%' flexDirection='column'>
      {' '}
      <Text
        fontWeight='700'
        fontSize='25px'
        color='#463A80'
        ml={3}
        mb={4}
        textAlign='left'
      >
        HTS LOGIN
      </Text>
      <CustomInput
        label='email'
        placeholder='example@emm'
        onChange={(e) => setEmail(e.target.value)}
      />
      <CustomInput
        label='password'
        placeholder='......'
        onChange={(e) => setPassword(e.target.value)}
      />
      <Flex my={2} p={2} w='100%' justifyContent='flex-end'>
        <Button
          flexBasis='50%'
          textAlign='right'
          variant='link'
          className='forgot-pass'
          type='button'
          onClick={() => {
            history.push(PUBLIC_PATHS.FORGOT_PASS);
          }}
        >
          Forgot Password?
        </Button>
      </Flex>
      <Button
        margin={[1, 3]}
        onClick={login}
        isLoading={loading}
        minW={['300px', '380px']}
      >
        Login
      </Button>
      <Button
        margin={[1, 3]}
        minW={['300px', '380px']}
        _hover={{ background: 'lightgray' }}
        onClick={() => {
          history.push(PUBLIC_PATHS.REGISTER);
        }}
        bg='transparent'
        color='black'
      >
        New user? create account
      </Button>
    </Flex>
  );
}
