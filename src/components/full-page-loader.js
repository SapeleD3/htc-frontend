import { Flex, Spinner } from '@chakra-ui/react';

export default function FullPageLoader() {
  return (
    <Flex
      bg='#E5E5E5'
      justifyContent='center'
      alignItems='center'
      height='100vh'
      width='100%'
    >
      <Spinner thickness='4px' speed='0.65s' color='#E54242' size='xl' />
    </Flex>
  );
}
