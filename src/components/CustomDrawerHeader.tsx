import {Avatar, Box, HStack, Text} from 'native-base';
import React from 'react';
import Search from './Icons/Search';

export default function CustomDrawerHeader() {
  return (
    <HStack
      alignSelf={'center'}
      justifyContent={'space-between'}
      width={'full'}
      alignItems={'center'}>
      <Search size={5} />
      <Text fontSize={'xl'} fontWeight={500}>
        Beach Tennis
      </Text>
      <Avatar size={"10"}>CG</Avatar>
    </HStack>
  );
}
