import {
  Box,
  Container,
  FormLabel,
  Heading,
  VStack,
  Input,
  Button,
  Textarea,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <Container h="92vh">
      <VStack h="full" justifyContent={'center'} spacing="5">
        <Heading children="Contact us" />
        <form style={{ width: '100%' }}>
          <Box my={'4'}>
            <FormLabel htmlFor="name" children="Enter Name here" />
            <Input
              required
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Name"
              type={'text'}
              focusBorderColor="yellow.500"
            />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="email" children="Email Address" />
            <Input
              required
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="abc@gmail.com"
              type={'email'}
              focusBorderColor="yellow.500"
            />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="message" children="Message" />
            <Textarea
              required
              id="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Leave message here"
              type={'text'}
              focusBorderColor="yellow.500"
            />
          </Box>

          <Button my="4" colorScheme={'yellow'} type="submit">
            Send Mail
          </Button>
          <Box my="4">
            Request for a course?{' '}
            <Link to="/request">
              <Button colorScheme={'yellow'} variant="link">
                Click
              </Button>{' '}
              here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Contact;
