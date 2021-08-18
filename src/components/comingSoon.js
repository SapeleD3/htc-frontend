import { Flex, Text, Image, Box } from '@chakra-ui/react';
import construction from '../assets/construction.png';

export default function ComingSoon() {
  return (
    <Box height='100vh' width='100%' bg='#c0dbe3'>
      <Flex
        justifyContent='center'
        height='100vh'
        alignItems='center'
        flexDirection='column'
      >
        <Image boxSize='400px' src={construction} />
        <Text fontWeight='700' fontSize='35px' color='blackAlpha.700'>
          Coming Soon
        </Text>
      </Flex>
    </Box>
  );
}
