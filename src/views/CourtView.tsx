import {
  Box,
  Button,
  Center,
  HStack,
  Heading,
  Image,
  Select,
  Spacer,
  Text,
  VStack,
} from 'native-base';
import React from 'react';
import Container from '../components/Container';
import BreadCrumbs from '../components/BreadCrumbs';
import Star from '../components/Icons/Star';

export default function CourtView() {
  const placeholder = require('../../assets/images/placeholder.png');
  const placeholderMap = require('../../assets/images/map-placeholder.png');
  const placeholderChart = require('../../assets/images/chart.png');
  return (
    <Container scroll>
      <Spacer my={4} />
      <BreadCrumbs actualPath={'Quadra'} />
      <Spacer my={2} />
      <Image
        source={placeholder}
        alt="Quadra"
        width={'full'}
        height={'56'}
        borderRadius={'lg'}
        my={1}
        mb={4}
      />
      <HStack justifyContent={'space-between'} space={2}>
        <Button
          flex={1}
          h={12}
          bg={'transparent'}
          variant={'outline'}
          _pressed={{bg: 'transparent'}}>
          <Text>R$ 32/hora</Text>
        </Button>
        <Button
          flex={1}
          h={12}
          bg={'transparent'}
          variant={'outline'}
          _pressed={{bg: 'transparent'}}>
          <Text>3.4Km</Text>
        </Button>
        <Button
          flex={1}
          h={12}
          bg={'transparent'}
          variant={'outline'}
          _pressed={{bg: 'transparent'}}>
          <HStack alignItems={'center'} space={1}>
            <Star size={'md'} />
            <Text>4,90</Text>
          </HStack>
        </Button>
      </HStack>
      <Heading size={'lg'} fontWeight={500} mt={6}>
        Quadra 01
      </Heading>
      <Box mt={1} />
      <Text color="#999999">São José do Rio Preto - Seg à Sab</Text>
      <Box mt={4} />
      <Text color="theme_textLight">
        Uma quadra de beach tennis padrão, 16 metros de comprimento por 8 metros
        de largura, com uma rede ao centro que divide a quadra em duas partes
        iguais. As linhas que delimitam a quadra têm 5 centímetros de largura e
        são de cor branca. As linhas laterais da quadra são chamadas de linhas
        de saque e se estendem por toda a largura da quadra. A altura da rede é
        de 1,70 metros para homens e 1,55 metros para mulheres.
      </Text>
      <Box mt={6} />
      <Heading fontSize={16} fontWeight={400}>
        Especificações
      </Heading>
      <Box mt={2} />
      <VStack>
        <HStack padding={6} bg={'theme_gray'} alignItems={'center'} space={4}>
          <Heading fontSize={16} fontWeight={400} flex={1}>
            Disponibiliza bolas grátis?
          </Heading>
          <Heading fontSize={16} fontWeight={400} flex={1} px={4}>
            Sim
          </Heading>
        </HStack>
        <HStack padding={6} alignItems={'center'} space={4}>
          <Heading fontSize={16} fontWeight={400} flex={1}>
            Disponibiliza raquete grátis?
          </Heading>
          <Heading fontSize={16} fontWeight={400} flex={1} px={4}>
            Sim
          </Heading>
        </HStack>
      </VStack>
      <Box mt={6} />
      <Heading fontSize={16} fontWeight={400}>
        Localização
      </Heading>
      <Box position={'relative'}>
        <Box mb={4} />
        <Image
          source={placeholderMap}
          alt="Quadra"
          width={'full'}
          height={'48'}
          borderRadius={'lg'}
          my={1}
          mb={4}
        />
        <Center position={'absolute'} bottom={8} w={'full'}>
          <Button
            w={'40'}
            h={12}
            backgroundColor={'white'}
            _pressed={{bg: 'theme_gray'}}
            borderRadius={'lg'}
            style={{elevation: 10}}
            _text={{fontSize: 16, color: 'theme_text', fontWeight: 500}}>
            Ver no mapa
          </Button>
        </Center>
      </Box>
      <Box mt={6} />
      <HStack justifyContent={'space-between'} alignItems={'center'}>
        <Heading fontSize={16} fontWeight={400}>
          Horários de pico
        </Heading>
        <Select defaultValue="Sex" w={24} bg={'theme_gray'}>
          <Select.Item value={'Sex'} label="Sex" />
        </Select>
      </HStack>
      <Image
        source={placeholderChart}
        alt="Quadra"
        width={'full'}
        height={'48'}
        borderRadius={'lg'}
        my={1}
        mb={4}
      />
      <Box>// TODO - CHECKOUT</Box>
      <Box mt={8} />
    </Container>
  );
}
