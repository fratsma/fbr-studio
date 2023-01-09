import { Box, extendTheme, Button, ButtonGroup, Center, Heading, ChakraProvider, Text, SimpleGrid, Wrap, WrapItem } from '@chakra-ui/react'
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

export default function MyCard() {
    return(
        <>


            {/* <SimpleGrid  pt={10} spacing={4} columns={3} > */}
            <Wrap spacing="30px" justify="center" padding={10}>
            <WrapItem>

            
            <Card bg={colours.white} maxWidth={450} height={250}>
                <CardHeader >
                <Heading size='md'>Search Engine Optimisation</Heading>
                </CardHeader>
                <CardBody>
                <Text>See how your business' website can improve their SEO and learn how to boost your ranking.</Text>
                </CardBody>
                <CardFooter>
                <Button bg={colours.lightblue} color={colours.white}>View here</Button>
                </CardFooter>
            </Card>
            </WrapItem>
            <WrapItem >
            <Card bg={colours.white} maxWidth={450} height={250}>
                <CardHeader>
                <Heading size='md'>Service Information</Heading>
                </CardHeader>
                <CardBody>
                <Text>Find out what services we provide to help you improve your SEO.</Text>
                </CardBody>
                <CardFooter>
                <Button bg={colours.lightblue} color={colours.white}>View here</Button>
                </CardFooter>
            </Card>
            </WrapItem>
            <WrapItem>
            <Card bg={colours.white} maxWidth={450} height={250}>
                <CardHeader>
                <Heading size='md'>SEO Blog</Heading>
                </CardHeader>
                <CardBody>
                <Text>Find out how to get your business to show up on Google! View blog posts and learn more about SEO without all the jargon.</Text>
                </CardBody>
                <CardFooter>
                <Button bg={colours.lightblue} color={colours.white}>View here</Button>
                </CardFooter>
            </Card>
            </WrapItem>
            {/* </SimpleGrid> */}
            </Wrap>


        </>
    )
}