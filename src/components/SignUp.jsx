import {
  Avatar,
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <Container maxW={'container.xl'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          m={'auto'}
          w={['full', '96']}
          my={'16'}
        >
          <Heading>VIDEO HUB</Heading>
          <Avatar alignSelf={'center'} boxSize={'32'} />
          <Input
            type={'text'}
            required
            placeholder="Name..."
            focusBorderColor={'purple.500'}
          />
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

          <Button type={'submit'} colorScheme={'purple'}>
            Sign Up
          </Button>
          <Text textAlign={'right'}>
            Already Signed Up?{' '}
            <Button
              colorScheme={'purple'}
              variant={'link'}
              alignSelf={'flex-end'}
            >
              <Link to={'/login'}>Log In</Link>
            </Button>{' '}
            Here
          </Text>
        </VStack>
      </form>
    </Container>
  );
}

export default SignUp;
