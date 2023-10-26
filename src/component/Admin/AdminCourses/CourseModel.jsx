import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Grid,
  Heading,
  Box,
  Stack,
  Text,
  Button,
  VStack,
  Input,
  ModalFooter,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { fileUploadCss } from '../../Auth/Register';
const CourseModel = ({
  isOpen,
  onClose,
  id,
  deleteButtonHandler,
  addLectureHandler,
  courseTitle,
  lectures = [1, 2, 3, 4, 5, 6, 7, 8],
}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [vedio, setVedio] = useState('');
  const [vedioPrev, setVedioPrev] = useState('');

  const changeVedioHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setVedioPrev(reader.result);
      setVedio(file);
    };
  };

  const handleclose = () => {
    setTitle('');
    setDescription('');
    setVedio('');
    setVedioPrev('');
    onClose();
  };
  return (
    <Modal
      isOpen={isOpen}
      size="full"
      onClose={handleclose}
      scrollBehavior="inside"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{courseTitle}</ModalHeader>
        <ModalCloseButton onClick={onClose} />
        <ModalBody p="16">
          <Grid templateColumns={['1fr', '3fr 1fr']}>
            <Box px={['0', '16']}>
              <Box my="5">
                <Heading children={courseTitle} />
                <Heading children={`#${id}`} size="sm" opacity={0.4} />
              </Box>
              <Heading children={'Lectures'} size="lg" />
              {lectures.map((item, i) => (
                <VedioCard
                  key={i}
                  title="React Intro"
                  description="This is intro lecture"
                  num={i+1}
                  lectureId="sdsfdsfds"
                  courseId={id}
                  deleteButtonHandler={deleteButtonHandler}
                />
              ))}
            </Box>
            <Box>
              <form
                onSubmit={e =>
                  addLectureHandler(e, id, title, description, vedio)
                }
              >
                <VStack spacing={'4'}>
                  <Heading
                    children="Add Lectures"
                    size={'md'}
                    textTransform={'uppercase'}
                  />
                  <Input
                    focusBorderColor="purple.300"
                    placeholder="Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                  />
                  <Input
                    focusBorderColor="purple.300"
                    placeholder="Description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                  />

                  <Input
                    accept="vedio/mp4"
                    required
                    type={'file'}
                    onChange={changeVedioHandler}
                    css={{
                      '&::file-selector-button': {
                        ...fileUploadCss,
                        color: 'purple',
                      },
                    }}
                    focusBorderColor="purple.300"
                  />
                  {vedioPrev && (
                    <vedio
                      controlsList="nodownload"
                      controls
                      src={vedioPrev}
                    ></vedio>
                  )}
                  <Button w="full" colorScheme={'purple'} type="submit">
                    Upload
                  </Button>
                </VStack>
              </form>
            </Box>
          </Grid>
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleclose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CourseModel;

function VedioCard({
  num,
  title,
  description,
  lectureId,
  courseId,
  deleteButtonHandler,
}) {
  return (
    <Stack
      direction={['column', 'row']}
      my="8"
      borderRadius={'lg'}
      boxShadow={'0 0 10px rgba(107,70,193,0.5)'}
      justifyContent={['flex-start', 'space-between']}
      p={['4', '8']}
    >
      <Box>
        <Heading size={'sm'} children={`#${num} ${title}`} />
        <Text children={description} />
      </Box>
      <Button
        color={'purple.600'}
        onClick={() => deleteButtonHandler(courseId, lectureId)}
      >
        <RiDeleteBin7Fill />
      </Button>
    </Stack>
  );
}
