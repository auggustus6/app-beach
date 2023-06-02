import {Avatar, Box, HStack, Text} from 'native-base';
import React from 'react';
import Search from './Icons/Search';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function CustomDrawerHeader() {
  const navigation: any = useNavigation();
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
      <TouchableOpacity onPress={() => navigation.navigate('profile_drawer')}>
        <Avatar size={'10'}>CG</Avatar>
      </TouchableOpacity>
    </HStack>
  );
}
