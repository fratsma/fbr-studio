import {
  Box, Container, Link, Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import * as React from "react";
import colours from '../config/colours';


  
  export default function SmallWithSocial() {
    return (
        <Box
          bg={colours.lightblue}
          mt={10}
          color={colours.lightgrey}>

          <Container
            as={Stack}

            maxW={'6xl'}
            py={4}
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={{ base: 'center', md: 'space-between' }}
            align={{ base: 'center', md: 'center' }}>
            <Stack direction={'row'} spacing={6}>
              <Link href={'#'}>Home</Link>
              <Link href={'/services'}>Services</Link>
              <Link href={'/webDev'}>Web Dev</Link>

              <Link href={'/blog'}>Blog</Link>

            </Stack>
            <Text>Contact us at: info@fbrstudios.com</Text>
            <Text>© 2023 FBR Studios. All rights reserved</Text>

          </Container>
        </Box>
      );
    }
  