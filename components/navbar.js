import { Box, extendTheme, Button, ButtonGroup, Center, Heading, ChakraProvider, Text, Flex, Switch, IconButton } from '@chakra-ui/react'
import { Image } from "@chakra-ui/image"
import { Link } from 'gatsby'
import "@fontsource/overpass"
import "@fontsource/lato"
import "@fontsource/questrial"
import * as React from "react"
import colours from '../config/colours'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { useState } from 'react'

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
                <Heading textAlign={"center"} fontSize={45}
                mt={25}>FBR Studios</Heading>





                </ChakraProvider>
            </Center>

            <Center>
            <Text  textAlign={"center"} fontSize={20}>The Search Engine Specialist</Text>
            </Center>

            <Center>
            <Link href="/" passHref>
            <Button m={5} width={200} bg={colours.lightblue} color={colours.white}>Home</Button>
            
            </Link>


            <Link href="/services" passHref>
            <Button m={5} width={200} bg={colours.lightblue} color={colours.white}>Services</Button>
            </Link>

            <Link href="/webDev" passHref>
            <Button m={5} width={200} bg={colours.lightblue} color={colours.white}>Web Development</Button>
            </Link>

            <Link href="/blog" passHref>
            <Button m={5} width={200} bg={colours.lightblue} color={colours.white}>Blog</Button>
            </Link>




            </Center>



            <Center pb={10}></Center>





        </>
    )
}