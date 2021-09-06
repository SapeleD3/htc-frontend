import { Flex, Button, Text, useToast } from '@chakra-ui/react';
import { useState } from 'react';
import CustomInput from '../../components/Input';
import { adminLogin } from './admin.loginApi';

export default function AdminLoginForm() {
  const toast = useToast();
  const [userName, setUserName] = useState('');
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');

  const login = () => {
    setLoading(true);
    adminLogin(
      setLoading,
      {
        userName,
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
        color='#fff'
        ml={3}
        mb={4}
        textAlign='left'
      >
        HTS LOGIN
      </Text>
      <CustomInput
        type2
        label='username'
        placeholder='unique username'
        onChange={(e) => setUserName(e.target.value)}
      />
      <CustomInput
        label='password'
        type2
        type='password'
        placeholder='......'
        onChange={(e) => setPassword(e.target.value)}
      />
      <Flex my={2} p={2} w='100%' justifyContent='flex-end'></Flex>
      <Button
        margin={[1, 3]}
        onClick={login}
        isLoading={loading}
        minW={['300px', '380px']}
      >
        Login
      </Button>
    </Flex>
  );
}
