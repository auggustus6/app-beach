import {Avatar, Heading, Text, VStack} from 'native-base';
import React from 'react';

export default function PlayerCard() {
  return (
    <VStack alignItems={'center'}>
      <Avatar>AF</Avatar>
      <Heading fontWeight={'normal'} mt={3} mb={1} size={'sm'}>
        Albert Flores
      </Heading>
      <Text color={'theme_textLight'}>Profissional</Text>
    </VStack>
  );
}
