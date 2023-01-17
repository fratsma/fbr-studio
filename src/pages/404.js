import { Box, ChakraProvider, Heading, Text } from '@chakra-ui/react';
import * as React from 'react';
import { DarkModeSwitch } from "../../components/navbar2";
import colours from '../../config/colours';


export default function NotFound() {
  return (

    <ChakraProvider>

      <DarkModeSwitch/>

    <Box textAlign="center" py={10} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="4xl"
        color={colours.lightblue}
        >
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Page Not Found
      </Text>
      <Text color={'gray.500'} mb={6}>
        The page you're looking for does not seem to exist
      </Text>


    </Box>
          </ChakraProvider>
  );
}
