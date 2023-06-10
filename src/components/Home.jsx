import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

function Home() {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
        <Heading
          textTransform={'uppercase'}
          textAlign={'center'}
          children={'SERVICES'}
          py="2"
          w={'fit-content'}
          m={'auto'}
          borderBottom={'2px solid'}
        />
        <Stack
          h={'full'}
          p="4"
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />
          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign="center"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
            illum in! Excepturi illum quibusdam delectus eveniet quod id
            reiciendis ut, repellat minima voluptatum placeat at quia officiis
            cupiditate, quo iure! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Libero nisi vero facilis, natus odit nam magnam,
            exercitationem dolore accusantium assumenda placeat earum expedita!
            Quam laboriosam voluptatum tempora quasi. Aliquid, veritatis! Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Temporibus velit
            non quod architecto. Quos earum dolorum quidem nihil consequatur,
            fugiat tenetur tempore necessitatibus, vel eius dignissimos ratione
            repudiandae, quisquam sapiente. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Sit aliquid labore alias, a at cum
            nihil vero vitae? Fugit accusamus, explicabo neque id impedit
            placeat atque nisi iure aperiam fugiat?
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}

const HeadingOptions = {
  pos: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  texttransform: 'uppercase',
  p: '4',
  size: '4xl',
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showArrows={false}
    showStatus={false}
    showThumbs={false}
  >
    <Box w={'full'} h={'100vh'}>
      <Image src={img1} h={'full'} w={'full'} objectFit={'cover'} />
      <Heading
        bg={'blackAlpha.600'}
        color={'white'}
        children={'Watch The Future'}
        {...HeadingOptions}
      />
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img2} h={'full'} w={'full'} objectFit={'cover'} />
      <Heading
        bg={'whiteAlpha.900'}
        color={'black'}
        children={'The Future Is Game'}
        {...HeadingOptions}
      />
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img3} h={'full'} w={'full'} objectFit={'cover'} />
      <Heading
        bg={'whiteAlpha.600'}
        color={'black'}
        children={'Gaming On Console'}
        {...HeadingOptions}
      />
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img4} h={'full'} w={'full'} objectFit={'cover'} />
      <Heading
        bg={'whiteAlpha.600'}
        color={'black'}
        children={'Night Life Is Cool'}
        {...HeadingOptions}
      />
    </Box>
  </Carousel>
);

export default Home;
