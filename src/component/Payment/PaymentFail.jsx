import { Container, Heading, VStack, Box, Text, Link, Button } from '@chakra-ui/react';
import React from 'react';
import {RiCheckboxCircleFill} from 'react-icons/ri'
const PaymentFail = () => {
  return (
    <Container h="90vh" p="5">
      <Heading my="8" textAlign={'center'}>
        You Have Pro Pack
      </Heading>
      <VStack boxShadow={'lg'} pb="16" alignItems={'center'} borderRadius="lg">
        <Box
          w="full"
          bg="yellow.400"
          p="4"
          css={{ borderRadius: '8px 8px 0 0' }}
        >
          <Text color="black">Payment Fail</Text>
        </Box>
        <Box p="4">
          <VStack textAlign={'center'} px="8" mt="4" spacing={'8'}>
            <Text>
              Congratulation you're a pro member.You have access to primium
              content.
            </Text>
            <Heading size={'4xl'}>
              <RiCheckboxCircleFill/>
            </Heading>
          </VStack>
        </Box>
        <Link to='/profile'>
          <Button variant={'ghost'}>
            Go to profile
          </Button>
        </Link>
        <Heading size={'xs'}>
          Reference: dsdsfdsfdvfdvfdfffds
        </Heading>
      </VStack>
    </Container>
  );
};
export default PaymentFail