import { Box, extendTheme, Button, ButtonGroup, Center, Heading, ChakraProvider, Text, SimpleGrid, Wrap, WrapItem, Stack, Image } from '@chakra-ui/react'
import { Link } from 'gatsby'
import "@fontsource/overpass"
import "@fontsource/lato"
import "@fontsource/questrial"
import * as React from "react"
import colours from '../config/colours'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'


const myTheme = extendTheme({
    fonts: {
      heading: "lato",
      body: "lato",
      
    },
    styles: {
        global: {
          body: {
            bg: "#f5f5f5",
          },
        },
      },
  })

export default function BestSellingServices() {
    return(
        <>

        <Center pt={10} pb={10}> 
            <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            bg={colours.white}
            width={"50%"}
            >
            <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                alt='Caffe Latte'
            />

            <Stack>
                <CardBody>
                <Heading size='md'>Full SEO Audit</Heading>

                <Text py='2'>
                    The best way to improve your small business' online presence. We provide an in depth analysis of your website and guide you on how to improve your SEO.

                </Text>

                <Text color={colours.lightblue} fontSize='2xl'>
                    £30
                </Text>
                </CardBody>

                <CardFooter>
                <Button variant='solid' bg={colours.lightblue} color={colours.white}>
                    View More
                </Button>

                <Button variant='solid' bg={colours.lightblue} color={colours.white} marginLeft={5}>
                    Add to Cart
                </Button>
                </CardFooter>
            </Stack>
            </Card>
            </Center>

        </>
    )
}