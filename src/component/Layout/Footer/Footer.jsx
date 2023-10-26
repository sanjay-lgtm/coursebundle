import { Box, HStack, Heading, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import {
  TiSocialYoutubeCircular,
  TiSocialInstagramCircular,
} from 'react-icons/ti';
import { DiGithub } from 'react-icons/di';
const Footer = () => {
  return (
    <Box padding={'4'} bg="blackAlpha.900" minH={'10vh'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={['center', 'flex-start']} width="full">
          <Heading children="All Right Reserved" color={'white'} />
          <Heading
            children="@copyright issue"
            color={'red.400'}
            fontFamily={'body'}
            size="sm"
          />
        </VStack>

        <HStack spacing={['2', '10']} justifyContent="center" color={'white'} fontSize='50'>
          <a href="https://youtube.com" target={'blank'}>
            <TiSocialYoutubeCircular/>
          </a>
          <a href="https://www.instagram.com/s._.an._.jay/" target={'blank'}>
            <TiSocialInstagramCircular/>
          </a>
          <a href="https://github.com/sanjay-lgtm" target={'blank'}>
            <DiGithub/>
          </a>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Footer;
