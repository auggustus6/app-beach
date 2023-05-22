import {
  Box,
  Button,
  Center,
  Checkbox,
  HStack,
  Heading,
  Link,
  SimpleGrid,
  Spacer,
  Text,
} from 'native-base';
import React from 'react';
import Logo from '../components/Logo';
import Container from '../components/Container';
import DefaultInput from '../components/DefaultInput';
import DefaultButton from '../components/DefaultButton';

export default function LoginView() {
  return (
    <Box flex={1} height={'full'} bgColor={'theme_primary'}>
      <Center flex={1}>
        <Logo />
      </Center>
      <Box
        flex={3}
        bgColor={'white'}
        roundedTop={'2xl'}
        justifyContent={'center'}>
        <Container space={4}>
          <Heading size="2xl" color="theme_primary" fontWeight={'400'}>
            Entrar
          </Heading>
          <Text color="theme_textLight">Preencha as informações abaixo</Text>
          <DefaultInput placeholder="Email" />
          <DefaultInput placeholder="Senha" />
          <DefaultButton>Entrar</DefaultButton>
          <HStack justifyContent={'space-between'}>
            <Checkbox
              value="false"
              _checked={{
                bg: 'theme_primary',
                borderColor: 'theme_primary',
              }}
              _text={{
                fontSize: 'sm',
              }}>
              Lembrar de mim
            </Checkbox>
            <Link
              _text={{
                fontSize: 'sm',
                color: 'theme_link',
              }}>
              Esqueceu a senha?
            </Link>
          </HStack>

          <Box my={4}>
            <Box w="full" h={0.5} bg="theme_gray" />
            <Text
              color="theme_textLight"
              textAlign={'center'}
              bg={'white'}
              marginTop={-3}
              width={'40'}
              alignSelf={'center'}>
              Ou continue com
            </Text>
          </Box>

          <SimpleGrid spacingX={4} columns={3}>
            {new Array(3).fill(0).map((_, index) => (
              <Box key={index} style={{width: 100}}>
                <Button
                  h={16}
                  rounded={'2xl'}
                  bgColor={'transparent'}
                  borderColor={'theme_gray'}
                  borderWidth={1}
                />
              </Box>
            ))}
          </SimpleGrid>

          <Text textAlign={'center'} mt={4}>
            Nao possui uma conta?{' '}
            <Link
              _text={{
                fontSize: 'sm',
                color: 'theme_link',
              }}>
              Registre-se
            </Link>
          </Text>
        </Container>
      </Box>
    </Box>
  );
}
