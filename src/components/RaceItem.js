import React from 'react';
import { BiLike, BiHappy, BiHeart, BiStar } from 'react-icons/bi';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Button,
  Divider,
  Heading,
  Flex,
  Box,
  IconButton,
} from '@chakra-ui/react';

const RaceItem = ({ title, date, description, thumbsup, heart, happy }) => {
  return (
    <Card backgroundColor={'white'} maxW='md' h='full'>
      <CardHeader>
        <Flex justifyContent='space-between'>
          <Box w='75%'>
            <Heading size='md'>{title}</Heading>
            <Text pt='2' fontSize='sm' color={'gray.500'}>
              {date}
            </Text>
          </Box>
          <IconButton
            aria-label='Search database'
            icon={<BiStar />}
            colorScheme='yellow'
          />
        </Flex>
      </CardHeader>
      <CardBody>
        <Box>
          <Text>{description}</Text>
        </Box>
      </CardBody>
      <Divider />
      <CardFooter justify='space-between' w='full'>
        <Button flex='1' variant='ghost' leftIcon={<BiLike />}>
          {thumbsup}
        </Button>
        <Button flex='1' variant='ghost' leftIcon={<BiHeart />}>
          {heart}
        </Button>
        <Button flex='1' variant='ghost' leftIcon={<BiHappy />}>
          {happy}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RaceItem;
