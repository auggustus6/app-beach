import {Box, HStack, Text} from 'native-base';
import React from 'react';
import Chevron from './Icons/Chevron';
import {useNavigation} from '@react-navigation/native';

interface BreadCrumbsProps {
  actualPath: string;
}

export default function BreadCrumbs({actualPath}: BreadCrumbsProps) {
  const navigation: any = useNavigation();
  // TODO - type routes

  function handleGotoHome() {
    navigation.navigate('home_drawer');
  }

  return (
    <Box flexDirection={'row'} alignItems={'center'} style={{gap: 4}}>
      <Text underline fontSize={'md'} onPress={handleGotoHome}>
        Home
      </Text>{' '}
      <Chevron size={'xs'} />{' '}
      <Text fontSize={'md'} color="#a1a1a1">
        {actualPath}
      </Text>
    </Box>
  );
}
