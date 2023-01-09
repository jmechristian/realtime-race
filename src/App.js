import { Box, Flex, Heading } from '@chakra-ui/react';
import Events from './components/Events';

function App() {
  return (
    <Flex backgroundColor={'gray.200'} py={8}>
      <Flex direction='column' px={6} w='full' gap={6}>
        <Box>
          <Heading>Events</Heading>
        </Box>
        <Events />
      </Flex>
    </Flex>
  );
}

export default App;
