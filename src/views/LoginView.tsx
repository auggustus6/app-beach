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
import DefaultButton from '../components/Buttons/DefaultButton';
import Facebook from '../components/Icons/Facebook';
import OAuthButton from '../components/Buttons/OAuthButton';
import Google from '../components/Icons/Google';
import Apple from '../components/Icons/Apple';

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
            <OAuthButton icon={<Facebook size={'10'} />} />
            <OAuthButton icon={<Google size={'12'} />} />
            <OAuthButton icon={<Apple size={'12'} />} />
          </SimpleGrid>

          <Box flexDir={'row'} alignSelf={'center'} mt={4}>
            <Text>Nao possui uma conta? </Text>
            <Link
              _text={{
                fontSize: 'sm',
                color: 'theme_link',
              }}>
              Registre-se
            </Link>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
