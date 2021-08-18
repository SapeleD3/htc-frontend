import React from 'react';
import { Box, Stack, Flex, Text } from '@chakra-ui/react';

export default function AppFooter() {
  return (
    <Stack
      position='relative'
      width='100%'
      bottom='0'
      left='0'
      bg='#463A80'
      color='white'
      padding='3'
    >
      <Box>
        <Flex flexWrap='wrap' direction={['column', 'row']}>
          <Text margin='0,5' fontSize='10' fontWeight='light'>
            Powered by &copy; {new Date().getFullYear()} HTC | All rights
            reserved
          </Text>
          <Flex flex='1' flexWrap='wrap' justify={['flex-start', 'flex-end']}>
            <Text margin='0.5' fontSize='10' fontWeight='light'>
              <span>Terms and Conditions</span> | <span>Privacy Policy</span>
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Stack>
  );
}
