import {Avatar, Box, Center, Circle, IconButton, VStack} from 'native-base';
import React from 'react';
import Container from '../components/Container';
import BreadCrumbs from '../components/BreadCrumbs';
import DefaultLayout from '../layouts/DefaultLayout';
import Pen from '../components/Icons/Pen';
import DefaultInput from '../components/DefaultInput';
import DefaultButton from '../components/Buttons/DefaultButton';

// TODO - take all these components to a layout component
export default function ProfileView() {
  const placeholder = require('../../assets/images/placeholder.png');
  return (
    <DefaultLayout actualPath={'Perfil'} scroll>
      <Center mb={8}>
        <Box position={'relative'}>
          <Avatar source={placeholder} w={150} h={150} />
          <IconButton
            position={'absolute'}
            bottom={-1}
            right={-2}
            bg="theme_secondary"
            borderWidth={4}
            borderColor={'white'}
            borderRadius={999}
            icon={<Pen />}
          />
        </Box>
      </Center>
      <VStack space={4}>
        <DefaultInput
          placeholder="Nome"
          label="Nome"
          value="Joana laranjinha"
        />
        <DefaultInput
          placeholder="Email"
          label="Email"
          value="Larajona@email.com"
        />
        <DefaultInput
          placeholder="Telefone (Whatsapp)"
          label="Telefone (Whatsapp)"
          value="(00) 0 0000-0000"
        />
        <DefaultInput
          placeholder="Nível:"
          label="Nível:"
          value="Joana laranjinha"
        />
        <Box></Box>
        <DefaultButton>Salvar alterações</DefaultButton>
      </VStack>
    </DefaultLayout>
  );
}
