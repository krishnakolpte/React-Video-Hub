import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { BiMenuAltLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom';

function Header() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <Button
        position={'fixed'}
        top={'4'}
        left={'4'}
        colorScheme={'purple'}
        borderRadius={'full'}
        p={'0'}
        w={'10'}
        h={'10'}
        onClick={onOpen}
        zIndex={'overlay'}
      >
        <BiMenuAltLeft size={'20'} />
      </Button>

      <Drawer placement={'left'} isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader children={'VIDEO HUB'} />
          <DrawerCloseButton />
          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              <Button colorScheme={'purple'} variant={'ghost'}>
                <Link onClick={onClose} to={'/'}>
                  Home
                </Link>
              </Button>
              <Button colorScheme={'purple'} variant={'ghost'}>
                <Link onClick={onClose} to={'/videos'}>
                  Videos
                </Link>
              </Button>
              <Button colorScheme={'purple'} variant={'ghost'}>
                <Link onClick={onClose} to={'/videos?category=free'}>
                  Free Videos
                </Link>
              </Button>
              <Button colorScheme={'purple'} variant={'ghost'}>
                <Link onClick={onClose} to={'/upload'}>
                  Upload
                </Link>
              </Button>
            </VStack>

            <HStack
              position={'absolute'}
              bottom={'10'}
              left={'0'}
              w={'full'}
              justifyContent={'space-evenly'}
            >
              <Button colorScheme={'purple'}>
                <Link onClick={onClose} to={'/login'}>
                  Log In
                </Link>
              </Button>
              <Button colorScheme={'purple'} variant={'outline'}>
                <Link onClick={onClose} to={'/signup'}>
                  Sign Up
                </Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Header;
