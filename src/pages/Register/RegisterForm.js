import { Flex, Button, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import CustomInput from '../../components/Input';
import { useHistory } from 'react-router';
import { PUBLIC_PATHS } from '../../app/constants';

export default function RegisterForm() {
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
        HTC REGISTER
      </Text>
      <CustomInput
        label='fullname'
        placeholder='example example'
        onChange={(e) => setEmail(e.target.value)}
      />
      <CustomInput
        label='email'
        placeholder='example@mail....'
        onChange={(e) => setEmail(e.target.value)}
      />
      <CustomInput
        label='phonenumber'
        placeholder='070****'
        onChange={(e) => setEmail(e.target.value)}
      />
      <CustomInput
        label='username'
        placeholder='uniqueone'
        onChange={(e) => setEmail(e.target.value)}
      />
      <CustomInput
        label='password'
        placeholder='......'
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button margin={[1, 3]} minW={['300px', '380px']}>
        Register
      </Button>
      <Button
        margin={[1, 3]}
        minW={['300px', '380px']}
        _hover={{ background: 'lightgray' }}
        onClick={() => {
          history.push(PUBLIC_PATHS.LOGIN);
        }}
        bg='transparent'
        color='black'
      >
        Already have an account? login
      </Button>
    </Flex>
  );
}
