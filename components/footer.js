import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
    Link,
  } from '@chakra-ui/react';
  import * as React from "react"
import colours from '../config/colours';


  
  export default function SmallWithSocial() {
    return (
        <Box
          bg={colours.lightblue}
          mt={10}
          color={useColorModeValue('gray.700', 'gray.200')}>
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
              <Link href={'/seo'}>Blog</Link>
              <Link href={'#'}>Contact</Link>
            </Stack>
            <Text>© 2022 FBR Studios. All rights reserved</Text>
          </Container>
        </Box>
      );
    }
  