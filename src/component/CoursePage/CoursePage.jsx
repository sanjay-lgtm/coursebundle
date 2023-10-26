import { Grid, Box, Heading, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import intro from '../../assets/vedios/intro.mp4';

const CoursePage = () => {
  const lectureTitle = 'LectureTitle';
  const [lectureNumber, setLectureNumber] = useState(0);
  const lectures = [
    {
      _id: 'dsdshdsgfd',
      title: 'sample1',
      description: 'lore,dmfkjdsfgfdvhjbdcbhbhjvdhjvdvjcxvhbv',
      vedio: {
        url: 'dsfdfvjvf',
      },
    },
    {
      _id: 'dsdshdsgfd',
      title: 'sample2',
      description: 'lore,dmfkjdsfgfdvhjbdcbhbhjvdhjvdvjcxvhbv',
      vedio: {
        url: 'dsfdfvjvf',
      },
    },
    {
      _id: 'dsdshdsgfd',
      title: 'sample3',
      description: 'lore,dmfkjdsfgfdvhjbdcbhbhjvdhjvdvjcxvhbv',
      vedio: {
        url: 'dsfdfvjvf',
      },
    },
  ];

  return (
    <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1fr']}>
      <Box>
        <video
          width={'100%'}
          controls
          disablePictureInPicture
          disableRemotePlayback
          controlsList="nodownload  noremoteplayback"
        >
          <source src={intro} type="video/mp4" />
        </video>
        <Heading
          m="4"
          children={`#${lectureNumber + 1} ${lectures[lectureNumber].title}`}
        />

        <Heading m="4" children="Description" />
        <Text m="4" children={lectures[lectureNumber].description} />
      </Box>
      <VStack>
        {lectures.map((element, index) => (
          <button
            key={element._id}
            onClick={()=>setLectureNumber(index)}
            style={{
              width: '100%',
              padding: '1rem',
              textAlign: 'center',
              margin: 0,
              borderBottom: '1px solid rgba(0,0,0,0.2)',
            }}
          >
            <Text noOfLines={1}>
              #{index + 1}
              {element.title}
            </Text>
          </button>
        ))}
      </VStack>
    </Grid>
  );
};

export default CoursePage;
