import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

function Videos() {
  const videosArr = [
    'https://cdn.pixabay.com/vimeo/774507949/sea-140111.mp4?width=1280&hash=0da1a522174ae5134fbd844bc4b9881db721c994',
    'https://cdn.pixabay.com/vimeo/822582138/river-161071.mp4?width=1280&hash=4833ded46fa64a5d011c6cacc5b8bb565cafcdb7',
    'https://cdn.pixabay.com/vimeo/822213540/ocean-160767.mp4?width=1280&hash=6e5563cb930694b87c9b258d2d7f739bcdf45e6f',
    'https://cdn.pixabay.com/vimeo/830461265/fogging-164360.mp4?width=1280&hash=f05a9cb58caeefbe7afe937ce7f9a00784d5f219',
    'https://cdn.pixabay.com/vimeo/816359520/waterfall-158229.mp4?width=1280&hash=441f37cb4e1477f8686ac26f6635081f8650c4db',
    'https://cdn.pixabay.com/vimeo/635675488/mountains-91545.mp4?width=1280&hash=8b629d6dfbc77c707764dc086008dc88ef1d713a',
  ];

  const [videoSrc, setVideoSrc] = useState(videosArr[0]);
  return (
    <Stack direction={['column', 'row']} h={'100vh'}>
      <VStack w={'full'}>
        <video
          controls
          controlsList="nodownload"
          src={videoSrc}
          style={{
            width: '100%',
          }}
        ></video>

        <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowY={'auto'}>
          <Heading>Sample Video 1</Heading>
          <Text>
            This is a sample video for testing and demo. This is called
            description.
          </Text>
        </VStack>
      </VStack>
      <VStack
        w={['full', 'xl']}
        alignItems={'stretch'}
        p="8"
        spacing={'8'}
        overflowY={'auto'}
      >
        {videosArr.map((item, index) => (
          <Button
            key={index}
            variant={'ghost'}
            colorScheme={'purple'}
            onClick={() => setVideoSrc(item)}
          >
            Lecture {index + 1}
          </Button>
        ))}
      </VStack>
    </Stack>
  );
}

export default Videos;
