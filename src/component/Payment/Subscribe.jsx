import {
  Container,
  Heading,
  VStack,
  Box,
  Text,
  Button,
} from '@chakra-ui/react';
import React from 'react';

const Subscribe = () => {
  return (
    <Container h="90vh" p="16">
      <Heading children="Welcome" my="8" textAlign={'center'} />
      <VStack
        boxShadow={'lg'}
        alignItems="stretch"
        borderRadius={'lg'}
        spacing="0"
      >
        <Box bg="yellow.400" p={'4'} css={{ borderRadius: '8px 8px 0 0' }}>
          <Text color={'black'} children={`Pro Pack - $299.00`} />
        </Box>
        <Box p="4">
          <VStack textAlign={'center'} px="8" mt={'4'} spacing="8">
            <Text children={`Join Pro pack and get access to all content.`} />
            <Heading size="md" children={'$299 Only'} />
          </VStack>
          <Button my="8" w={'full'} colorScheme={'yellow'}>
            Buy Now
          </Button>
        </Box>
        <Box bg="blackAlpha.400" p="4" css={{ borderRadius: '0 0 8px 8px' }}>
          <Heading
            size="sm"
            children={'100% refund at cancellation'}
            color={'white'}
            textTransform={'uppercase'}
          />
          <Text
            fontSize={'xs'}
            color="white"
            children="Terms and Condition Apply"
          />
        </Box>
      </VStack>
    </Container>
  );
};

export default Subscribe;
