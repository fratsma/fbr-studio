import {
  Box, Container, Heading, Image, Link, Text, useColorModeValue
} from '@chakra-ui/react';
import React from 'react';

import colours from "../config/colours";


const ArticleList = (props) => {
    return (

    <Link  href={props.ArticleLink} textDecoration="none" _hover={{ textDecoration: 'none' }}>

      <Container bg={colours.white} maxW={'7xl'} pt={2} pb={10} mt={10} mb={10} borderRadius={10} shadow="xl">

        <Box
        //   marginTop={{ base: '1', sm: '5' }}
          display="flex"
          flexDirection={{ base: 'column', sm: 'row' }}
          justifyContent="space-between">
          <Box
            display="flex"
            flex="1"
            marginRight="3"
            position="relative"
            alignItems="center">
            <Box
              width={{ base: '100%', sm: '85%' }}
              zIndex="2"
              marginLeft={{ base: '0', sm: '5%' }}
              marginTop="5%">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <Image
                  borderRadius="lg"
                  src={
                    props.imageLink
                }
                  alt={props.imageAlt}
                  objectFit="contain"
                  width={{ base: '100%', sm: '80%' }}
                />
              </Link>
            </Box>
            <Box zIndex="1" width="100%" position="absolute" height="100%">
              {/* <Box
                bgGradient={useColorModeValue(
                  'radial(orange.600 1px, transparent 1px)',
                  'radial(orange.300 1px, transparent 1px)'
                )}
                backgroundSize="20px 20px"
                opacity="0.4"
                height="100%"
              /> */}
            </Box>
          </Box>
          <Box
            display="flex"
            flex="1"
            flexDirection="column"
            justifyContent="center"
            marginTop={{ base: '3', sm: '0' }}>
            {/* <BlogTags tags={['Engineering', 'Product']} /> */}
            <Heading marginTop="1">
                {props.title}
            </Heading>
            <Text
              as="p"
              marginTop="2"
              color={useColorModeValue('gray.700', 'gray.200')}
              fontSize="lg">
              {props.description}
            </Text>
            {/* <BlogAuthor name="John Doe" date={new Date('2021-04-06T19:01:27Z')} /> */}
          </Box>
        </Box>
 
      </Container>
      </Link>
    );
  };
  
  export default ArticleList;