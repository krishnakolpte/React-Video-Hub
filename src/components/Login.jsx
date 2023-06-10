import {
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          m={'auto'}
          w={['full', '96']}
          my={'16'}
        >
          <Heading>Welcome Back</Heading>
          <Input
            type={'email'}
            required
            placeholder="Email..."
            focusBorderColor={'purple.500'}
          />
          <Input
            type={'password'}
            required
            placeholder="Password..."
            focusBorderColor={'purple.500'}
          />
          <Button variant={'link'} alignSelf={'flex-end'}>
            <Link to={'/forgetpassword'}> Forfet Password </Link>
          </Button>
          <Button type={'submit'} colorScheme={'purple'}>
            Log In
          </Button>
          <Text textAlign={'right'}>
            New User?{' '}
            <Button
              colorScheme={'purple'}
              variant={'link'}
              alignSelf={'flex-end'}
            >
              <Link to={'/signup'}>Sign Up</Link>
            </Button>{' '}
            Here
          </Text>
        </VStack>
      </form>
    </Container>
  );
}

export default Login;
