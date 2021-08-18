import { Flex, Button, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import CustomInput from '../../components/Input';
import { useHistory } from 'react-router';
import { PUBLIC_PATHS } from '../../app/constants';

export default function LoginForm() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
        HTC LOGIN
      </Text>
      <CustomInput
        label='email'
        placeholder='example@mail....'
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
      <Button margin={[1, 3]} minW={['300px', '380px']}>
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
