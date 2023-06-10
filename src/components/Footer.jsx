import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Stack,
  VStack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { BiSend } from 'react-icons/bi';

function Footer() {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
      <Stack direction={['column', 'row']} spacing={['8', '0']}>
        <VStack alignItems={'stretch'} w="full" px={'4'}>
          <Heading
            textAlign={['center', 'left']}
            size={'md'}
            children={'Subscribe For More Update'}
            textTransform={'uppercase'}
          />
          <HStack borderBottom={'2px solid white'} py={'2'}>
            <Input
              type={'email'}
              placeholder={'Enter your email...'}
              border="none"
              outline={'none'}
              focusBorderColor={'none'}
            />
            <Button
              p={'0'}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <BiSend size={'20'} />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textTransform={'uppercase'}>video hub</Heading>
          <Text>All Right Received</Text>
        </VStack>
        <VStack w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Social media
          </Heading>
          <Button variant={'link'}>
            <a href="https://www.instagram.com/its_krishnavk" target={'blank'}>
              Instagram
            </a>
          </Button>
          <Button variant={'link'}>
            <a href="https://github.com/krishnakolpte" target={'blank'}>
              Github
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
}

export default Footer;
