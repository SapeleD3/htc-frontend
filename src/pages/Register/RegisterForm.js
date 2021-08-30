import { Flex, Button, Text, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import CustomInput from '../../components/Input';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';
import { PUBLIC_PATHS } from '../../app/constants';
import { signupUser } from './register.api';

export default function RegisterForm() {
  const toast = useToast();
  const history = useHistory();
  const { username } = useParams();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhone] = useState('');
  const [userName, setUserName] = useState('');
  const [fullName, setFullName] = useState('');
  const [referralLink, setLink] = useState(null);
  const [loading, setLoading] = useState(false);

  const signUp = () => {
    const obj = {
      phoneNumber,
      email: email.toLowerCase(),
      password,
      userName,
      fullName,
    };
    if (username) {
      obj.referralLink = window.location.href;
    }
    if (referralLink) {
      obj.referralLink = referralLink;
    }
    signupUser(setLoading, obj, toast);
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
        HTC REGISTRATION
      </Text>
      <CustomInput
        label='fullname'
        placeholder='first last'
        onChange={(e) => setFullName(e.target.value)}
      />
      <CustomInput
        label='email'
        placeholder='example@mail....'
        onChange={(e) => setEmail(e.target.value)}
      />
      <CustomInput
        label='phonenumber'
        placeholder='070****'
        onChange={(e) => setPhone(e.target.value)}
      />
      <CustomInput
        label='username'
        placeholder='uniqueone'
        onChange={(e) => setUserName(e.target.value)}
      />
      <CustomInput
        label='password'
        type='password'
        placeholder='......'
        onChange={(e) => setPassword(e.target.value)}
      />
      <CustomInput
        label='referral link (Optional)'
        value={username ? window.location.href : null}
        placeholder='......'
        onChange={(e) => setLink(e.target.value)}
      />
      <Button
        margin={[1, 3]}
        isLoading={loading}
        onClick={signUp}
        minW={['300px', '380px']}
      >
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
