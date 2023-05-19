import {Box, Button, Center, Heading, Input, Spacer, Text} from 'native-base';
import React from 'react';
import Logo from '../components/Logo';
import Container from '../components/Container';

export default function LoginView() {
  return (
    <Box flex={1} height={'full'} bgColor={'orange.400'}>
      <Center flex={1}>
        <Logo />
      </Center>
      <Box
        flex={3}
        bgColor={'white'}
        roundedTop={'2xl'}
        justifyContent={'center'}>
        <Container space={4}>
          <Heading size="2xl" color="orange.400" fontWeight={'400'}>
            Login
          </Heading>
          <Text>Preencha as informações abaixo</Text>
          <Input placeholder="Email" />
          <Input placeholder="Senha" />
          <Button colorScheme={"lime"}  >Entrar</Button>
        </Container>
      </Box>
    </Box>
  );
}
