// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
// App.js
import React from 'react';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
  Text,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react';

function App() {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");

  return (
    <Container centerContent>
      <Button onClick={toggleColorMode} mb={4}>
        Toggle Color Mode
      </Button>
      <Box
        p={8}
        maxWidth="400px"
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
        bg={formBackground}
      >
        <VStack spacing={4}>
          <Heading as="h1" size="lg">
            Login
          </Heading>
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Enter your email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="Enter your password" />
          </FormControl>
          <Button colorScheme="teal" width="full">
            Login
          </Button>
          <Text fontSize="sm">
            Don't have an account? <Button variant="link" colorScheme="teal">Sign Up</Button>
          </Text>
        </VStack>
      </Box>
    </Container>
  );
}

export default App;


