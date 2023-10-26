import {
  Grid,
  Box,
  Heading,
  TableContainer,
  TableCaption,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Table,
  HStack,
  Button,
  Image,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import cursor from '../../../assets/Images/cursor.png';
import Sidebar from '../Sidebar';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import CourseModel from './CourseModel';
const AdminCourses = () => {
  const courses = [
    {
      id: 'msndsfdsf',
      title: 'Sanjay',
      category: 'admin',
      poster: {
        url: 'https://picsum.photos/200',
      },
      createdBy: 'sa@dsfdfdfds.com',
      views: 123,
      numOfVedios: 12,
    },
  ];

  const { isOpen, onClose, onOpen } = useDisclosure();

  const CourseDetailsHandler = userId => {
    onOpen();
  };
  const deleteButtonHandler = userId => {
    console.log(userId);
  };

  const deleteLectureButtonHandler = (courseId, lectureId) => {
    console.log(courseId);
    console.log(lectureId);
  };

  const addLectureHandler = (e, courseId, title, description, vedio) => {
    e.preventDefault();
  };

  return (
    <Grid
      css={{
        cursor: `url(${cursor}), default`,
      }}
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
    >
      <Box p={['0', '16']} overflowX="auto">
        <Heading
          textTransform={'uppercase'}
          children="All Users"
          my="16"
          textAlign={('center', 'left')}
        />
        <TableContainer w={['100vw', 'full']}>
          <Table variant={'simple'} size="lg">
            <TableCaption>All available Courses in the database</TableCaption>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Poster</Th>
                <Th>Title</Th>
                <Th>Category</Th>
                <Th>Creater</Th>
                <Th isNumeric>Views</Th>
                <Th isNumeric>Lectures</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {courses.map(item => (
                <Row
                  CourseDetailsHandler={CourseDetailsHandler}
                  deleteButtonHandler={deleteButtonHandler}
                  key={item._id}
                  item={item}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        <CourseModel
          isOpen={isOpen}
          onClose={onClose}
          id={'desfrhgfjhg'}
          deleteButtonHandler={deleteLectureButtonHandler}
          addLectureHandler={addLectureHandler}
        />
      </Box>
      <Sidebar />
    </Grid>
  );
};
export default AdminCourses;

function Row({ item, CourseDetailsHandler, deleteButtonHandler }) {
  return (
    <Tr>
      <Td>#{item.id}</Td>
      <Td>
        <Image src={item.poster.url} alt="No Image Found" />
      </Td>
      <Td>{item.title}</Td>
      <Td textTransform={'uppercase'}>{item.category}</Td>
      <Td>{item.createdBy}</Td>
      <Td isNumeric>{item.views}</Td>
      <Td isNumeric>{item.numOfVedios}</Td>

      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button
            onClick={() => CourseDetailsHandler(item._id)}
            variant={'outline'}
            color="purple.500"
          >
            View Lectures
          </Button>
          <Button
            onClick={() => deleteButtonHandler(item._id)}
            color={'purple.600'}
          >
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}
