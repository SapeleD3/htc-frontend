import React from 'react';
import { Input, Text, Box } from '@chakra-ui/react';

export default function CustomInput({
  label,
  placeholder,
  onChange,
  type,
  type2,
  value,
}) {
  return (
    <Box padding={[1, 3]} minW={['300px', '380px']}>
      <Text
        ml={1}
        mb={2}
        letterSpacing={0.3}
        color={type2 ? 'white' : 'blackAlpha.700'}
      >
        {label}
      </Text>
      <Input
        style={{
          border: '1px solid gray',
          padding: 15,
          height: 40,
          width: '100%',
        }}
        color={type2 ? 'white' : ''}
        defaultValue={value}
        disabled={value}
        type={type}
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
      />
    </Box>
  );
}
