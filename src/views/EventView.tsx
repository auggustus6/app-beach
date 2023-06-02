import {
  Box,
  Button,
  Center,
  HStack,
  Heading,
  Image,
  Modal,
  Select,
  Spacer,
  Text,
  VStack,
} from 'native-base';
import React, {useState} from 'react';
import Container from '../components/Container';
import BreadCrumbs from '../components/BreadCrumbs';
import Star from '../components/Icons/Star';
import {View} from 'react-native';
import DefaultButton from '../components/Buttons/DefaultButton';
import Heart from '../components/Icons/Heart';
import DefaultInput from '../components/DefaultInput';

export default function EventView() {
  const [showModal, setShowModal] = useState(false);

  const placeholder = require('../../assets/images/placeholder.png');
  const placeholderMap = require('../../assets/images/map-placeholder.png');

  return (
    <Container scroll>
      <Spacer my={4} />
      <BreadCrumbs actualPath={'Evento'} />
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

      <Heading size={'lg'} fontWeight={500} mt={6}>
        Evento
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

      {/* TODO - CREATE COMPONENTE TO SPECIFICATIONS */}
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

      {/* TODO - create map component */}
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

      {/* TODO - Make this component be like as figma */}
      {/* For any reason, shadow is not working, not even elevation, i'll see this later */}
      <VStack width={'full'} mt={12} space={4} shadow={10}>
        <DefaultButton onPress={() => setShowModal(true)}>
          Quero participar - R$ 32
        </DefaultButton>
      </VStack>
      {/* TODO - Move modal to a separated component */}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header
            style={{
              borderBottomWidth: 0,
              shadowOffset: {height: 0, width: 0},
              shadowOpacity: 0,
              elevation: 0,
            }}>
            Informações
          </Modal.Header>
          <Modal.Body>
            <VStack space={4}>
              <DefaultInput
                placeholder="Nome"
                label="Nome"
                value="Joana laranjinha"
              />
              <DefaultInput
                placeholder="Categoria:"
                label="Categoria:"
                value="Iniciante"
              />
              <DefaultInput
                placeholder="Telefone (Whatsapp)"
                label="Telefone (Whatsapp)"
                value="(00) 0 0000-0000"
              />
              <Box />
              <DefaultButton>Confirmar inscrição</DefaultButton>
            </VStack>
          </Modal.Body>
        </Modal.Content>
      </Modal>
      <Box mt={8} />
    </Container>
  );
}
