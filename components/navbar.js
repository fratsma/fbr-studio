import { Box, extendTheme, Button, ButtonGroup, Center, Heading, ChakraProvider } from '@chakra-ui/react'
import { Link } from 'gatsby'
import "@fontsource/overpass"
import "@fontsource/lato"
import "@fontsource/questrial"
import * as React from "react"
import colours from '../config/colours'

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
  

export default function Header() {
    return (
        <>
            <Center>
                <ChakraProvider theme={myTheme}>
                <Heading textAlign={"center"} fontSize={35}
                mt={25}>FBR Studio</Heading>
                </ChakraProvider>
            </Center>

            <Center>
            <Link href="/" passHref>
            <Button m={5} width={200} bg={colours.lightblue} color={colours.white}>Home</Button>
            </Link>

            <Link href="/account/addBooking" passHref>
            <Button m={5} width={200} bg={colours.lightblue} color={colours.white}>Instant Emotions</Button>
            </Link>

            <Link href="/account/viewBooking" passHref>
            <Button m={5} width={200} bg={colours.lightblue} color={colours.white}>Web Development</Button>
            </Link>

            <Link href="/account/overview" passHref>
            <Button m={5} width={200} bg={colours.lightblue} color={colours.white}>SEO</Button>
            </Link>

            </Center>



            <Center pb={10}></Center>



        </>
    )
}