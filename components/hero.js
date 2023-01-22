import {
  Box, Button, Center, Container, createIcon, Flex, Heading, Image, Link, Stack, Text
} from '@chakra-ui/react';
import * as React from 'react';
import colours from '../config/colours';
  
  export default function Hero() {
    return (
      <Container maxW={'7xl'} mt={-100}>
        <Stack
            
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}>
          <Stack flex={1}  spacing={{ base: 5, md: 10 }}>
            <Heading
            as="h1"
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '3xl', lg: '5xl' }}>
                <Center>
              <Text
                as={'span'}
                position={'relative'}
                
                _after={{
                    rounded: 'sm',
                  content: "''",
                  width: 'full',
                  height: '30%',
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  zIndex: -1,
                }}>
                Affordable Web Services
              </Text>
              </Center>

              <Center>
              <Text as={'span'} color={colours.lightblue}>
                for your Small Business
              </Text>
              </Center>
            </Heading>
            <Text textAlign={'center'} color={'gray.500'}>
              FBR Studios provides services that will help your small business optimise it's online presence and help it to grow.
              We understand that search engine optimisation and web development can be confusing and expensive. This is why 
              we have created a range of simple and affordable services to increase online awareness of your business.
            </Text>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: 'column', sm: 'row' }}
              align={"Center"}>


              
              <Link href="/services" passHref width={"50%"}>

              <Button
                width={"100%"}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                color={colours.white}
                bg={colours.lightblue}>
                SEO Services
              </Button>
              </Link>

                
              <Link href="/webDev" passHref width={"50%"} >
              <Button

                size={'lg'}
                fontWeight={'normal'}
                px={6}
                color={colours.white}
                bg={colours.lightblue}
                width={"100%"}
                >
                Web Development
              </Button>
              </Link>

            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}

            w={'full'}>

            <Box
              position={'relative'}
              // height={'500px'}
              // width={'500px'}
              maxH={'500px'}
              maxW={'500px'}
              rounded={'2xl'}
              boxShadow={'2xl'}
              // bg={colours.lightgrey}
            //   width={'full'}
              overflow={'hidden'}>

              <Image
                alt={'FBR Studios Logo'}
                fit={'contain'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src='/icon JPEG.jpg'
                
              />
            </Box>
          </Flex>
        </Stack>
      </Container>
    );
  }
  


  