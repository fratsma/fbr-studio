
import {
  Center, ChakraProvider, Container, extendTheme, Heading, Image,
  Text, useColorModeValue
} from '@chakra-ui/react';
import * as React from "react";



const myTheme = extendTheme({
    fonts: {
      heading: "lato",
      body: "lato",    
    },
  
  })

export default function BlogPost(props) {

    return (
        <ChakraProvider theme={myTheme}>

            <Center>

            <Heading as="h1" fontSize={'3xl'} textAlign={"center"}>{props.title}
        </Heading>
            </Center>

            <Center>

                

            <Container mt={5} textAlign={'left'} minWidth={"40%"} mx='auto'>

            
            <Text
              as="p"
              marginTop="5"
              color={useColorModeValue('gray.700', 'gray.200')}
              fontSize="3xl"
              fontWeight={useColorModeValue('bold', 'extrabold')}
              >
              {props.firstHeading}
            </Text>


            <Text
              as="p"
              marginTop="5"
              color={useColorModeValue('gray.700', 'gray.200')}
              fontSize="lg">
              {props.firstParagraph}
            </Text>

            <Image
                marginTop="5"

                src={props.image1}
                alt='SEO for Small Business'
            />

            <Text
              as="p"
              marginTop="5"
              color={useColorModeValue('gray.700', 'gray.200')}
              fontSize="3xl"
              fontWeight={useColorModeValue('bold', 'extrabold')}
              >
              {props.secondHeading}
            </Text>

            

            <Text
              as="p"
              marginTop="5"
              color={useColorModeValue('gray.700', 'gray.500')}
              fontSize="lg">
              {props.secondParagraph}
            </Text>

            <Text
              as="p"
              marginTop="5"
              color={useColorModeValue('gray.700', 'gray.200')}
              fontSize="3xl"
              fontWeight={useColorModeValue('bold', 'extrabold')}
              >
              {props.thirdHeading}
            </Text>


            <Text
              as="p"
              marginTop="5"
              color={useColorModeValue('gray.700', 'gray.500')}
              fontSize="lg">
              {props.thirdParagraph}
            </Text>

            <Text
              as="p"
              marginTop="5"
              color={useColorModeValue('gray.700', 'gray.200')}
              fontSize="3xl"
              fontWeight={useColorModeValue('bold', 'extrabold')}
              >
              {props.fourthHeading}
            </Text>


            <Text
              as="p"
              marginTop="5"
              color={useColorModeValue('gray.700', 'gray.500')}
              fontSize="lg">
              {props.fourthParagraph}
            </Text>

            <Text
              as="p"
              marginTop="5"
              color={useColorModeValue('gray.700', 'gray.200')}
              fontSize="3xl"
              fontWeight={useColorModeValue('bold', 'extrabold')}
              >
              {props.fifthHeading}
            </Text>

            <Text
              as="p"
              marginTop="5"
              color={useColorModeValue('gray.700', 'gray.500')}
              fontSize="lg">
              {props.fifthParagraph}
            </Text>


            <Text
              as="p"
              marginTop="5"
              color={useColorModeValue('gray.700', 'gray.200')}
              fontSize="3xl"
              fontWeight={useColorModeValue('bold', 'extrabold')}
              >
              {props.sixthHeading}
            </Text>

        

            <Text
              as="p"
              marginTop="5"
              color={useColorModeValue('gray.700', 'gray.500')}
              fontSize="lg">
            {props.sixthParagraph}
            </Text>    


            <Text
              as="p"
              marginTop="5"
              color={useColorModeValue('gray.700', 'gray.500')}
              fontSize="lg">
            {props.eightParagraph}
            </Text>    


            <Text
              as="p"
              marginTop="5"
              color={useColorModeValue('gray.700', 'gray.500')}
              fontSize="lg">
            {props.nineParagraph}
            </Text>   

            <Text
              as="p"
              marginTop="5"
              color={useColorModeValue('gray.700', 'gray.200')}
              fontSize="3xl"
              fontWeight={useColorModeValue('bold', 'extrabold')}
              >
              {props.seventhHeading}
            </Text>

        

            <Text
              as="p"
              marginTop="5"
              color={useColorModeValue('gray.700', 'gray.500')}
              fontSize="lg">
            {props.seventhParagraph}
            </Text>    

            </Container>
            </Center>


        </ChakraProvider>

    )};