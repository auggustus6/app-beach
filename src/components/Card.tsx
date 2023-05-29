import {Box, HStack, Heading, Image, Text, VStack} from 'native-base';
import React from 'react';
// import placeholder from '../../assets/images/placeholder.png';
import Star from './Icons/Star';

// placeholder.png

export default function Card() {
  const placeholder = require('../../assets/images/placeholder.png');

  return (
    <VStack space={2}>
      <Image
        // src={'../../assets/images/placeholder.png'}
        source={placeholder}
        alt="Quadra"
        width={'full'}
        height={'48'}
        borderRadius={'lg'}
      />
      <HStack justifyContent={'space-between'} alignItems={'center'}>
        <Heading fontWeight={'normal'} size={'md'}>
          Quadra 1
        </Heading>
        <Text>R$ 32/hora</Text>
      </HStack>
      <HStack alignItems={'flex-end'}>
        <Text flex={1.2} color={'theme_textLight'}>
          São José do Rio Preto, SP 3k de distância
        </Text>
        <HStack
          flex={1}
          justifyContent={'flex-end'}
          alignItems={'center'}
          space={1}>
          <Star size={'md'} />
          <Text color={'theme_textLight'} fontSize={'sm'} mt={'0.5'}>
            4.9
          </Text>
        </HStack>
      </HStack>
    </VStack>
  );
}
