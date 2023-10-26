import React, { useState } from 'react';
import {
  Container,
  HStack,
  Heading,
  Input,
  Text,
  Button,
  Stack,
  VStack,
  Image,
} from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';

const Course = ({
  views,
  title,
  imageSrc,
  id,
  addToPlaylistHandler,
  creater,
  description,
  lectureCount,
}) => {
  return (
    <VStack className="course" alignItems={['center', 'flex-start']}>
      <Image src={imageSrc} boxSize="60" objectFit={'contain'} />
      <Heading
        textAlign={['center', 'left']}
        maxW="200px"
        size={'sm'}
        fontFamily={'sans-serif'}
        noOfLines={3}
        children={title}
      />
      <Text noOfLines={2} children={description} />
      <HStack>
        <Text
          noOfLines={2}
          fontWeight={'bold'}
          textTransform="uppercase"
          children={creater}
        />
        <Text
          noOfLines={2}
          fontFamily={'body'}
          textTransform="uppercase"
          children={creater}
        />
      </HStack>
      <Heading
        textAlign={'center'}
        size="xs"
        children={`Lectures - ${lectureCount}`}
        textTransform="uppercase"
      />
      <Heading
        size="xs"
        children={`Views - ${views}`}
        textTransform="uppercase"
      />
      <Stack direction={['column', 'row']} alignItems="center">
        <Link to={`/course/${id}`}>
          <Button colorScheme={'yellow'}>Watch Now</Button>
        </Link>
        <Button
          variant={'ghost'}
          colorScheme={'yellow'}
          onClick={() => addToPlaylistHandler(id)}
        >
          Add to PlayList
        </Button>
      </Stack>
    </VStack>
  );
};

const Courses = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');

  const addToPlaylistHandler = () => {
    console.log('Added to PlayList');
  };

  const categories = [
    'Web development',
    'artificial Intelligence',
    'data science',
    'App development',
    'Game developmemt',
  ];
  return (
    <Container minH={'95vh'} maxW="container.lg" paddingY={'8'}>
      <Heading children="All Courses" m={'8'} />
      <Input
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder="Search a Course..."
        type={'text'}
        focusBorderColor="yellow.500"
      />
      <HStack
        overflowX={'auto'}
        paddingY={'8'}
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {categories.map((item, index) => (
          <Button minW={'60'} key={index} onClick={() => setCategory(item)}>
            <Text children={item} />
          </Button>
        ))}
      </HStack>
      <Stack
        direction={['column', 'row']}
        flexWrap="wrap"
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start']}
      >
        <Course
          title={'sample'}
          description={'sample'}
          views={23}
          imageSrc={
            'data:image/jpeg;base64,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'
          }
          id={'Sample'}
          creater={'sample boy'}
          lectureCount={2}
          addToPlaylistHandler={addToPlaylistHandler}
        />
      </Stack>
    </Container>
  );
};

export default Courses;
