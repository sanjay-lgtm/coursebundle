import {
  Heading,
  Stack,
  Text,
  VStack,
  Button,
  Image,
  Box,
  HStack,
} from '@chakra-ui/react';
import React from 'react';
import { CgGoogle, CgYoutube } from 'react-icons/cg';
import { SiCoursera, SiUdemy } from 'react-icons/si';
import './home.css';
import { Link } from 'react-router-dom';
import vg from '../../assets/Images/vg.avif';
import { DiAws } from 'react-icons/di';
import intro from '../../assets/vedios/intro.mp4';
const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={['column', 'row']}
          height="100%"
          justifyContent={['center', 'space-between']}
          alignItems="center"
          spacing={['16', '56']}
        >
          <VStack
            width={'full'}
            alignItems={['center', 'flex-end']}
            spacing="8"
          >
            <Heading size={'2xl'}>
              <Text
                textAlign={['center', 'left']}
                children="Learn MERN"
                fontFamily={'cursive'}
              />
              <Text children="Find valueable content at reasonable price" />
              <Link to="/courses">
                <Button size={'lg'} colorScheme="yellow">
                  Explore Now
                </Button>
              </Link>
            </Heading>
          </VStack>
          <Image
            className="vector-graphices"
            boxSize={'md'}
            src={vg}
            objectFit="contain"
          />
        </Stack>
      </div>
      <Box padding={'8'} bg="blackAlpha.800">
        <Heading
          textAlign={'center'}
          fontFamily="body"
          color={'yellow.400'}
          children="OUR BRANDS"
        />
        <HStack
          className="brandsBanner"
          justifyContent={'space-evenly'}
          marginTop="4"
        >
          <CgGoogle />
          <CgYoutube />
          <SiCoursera />
          <SiUdemy />
          <DiAws />
        </HStack>
      </Box>

      <div className="container2">
        <video
        
          controls
          autoPlay
          muted
          loop
          disablePictureInPicture
          disableRemotePlayback
          controlsList="nodownload nofullscreen noremoteplayback"
        >
          <source src={intro} type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default Home;
