import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import {
  Button, Center, ChakraProvider, extendTheme, Flex, Heading, IconButton,
  Link, Text, useColorMode, Box
} from '@chakra-ui/react'
import * as React from "react"
import { useState } from 'react'
import colours from '../config/colours'
import "@fontsource/lato"
import "@fontsource/chakra-petch"
import "@fontsource/overpass"


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


export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  const [display, changeDisplay] = useState('none')
  return (

    <>
                <Center  bg={colours.white}>

                  
                
                <ChakraProvider theme={myTheme}>
                <Link href="/" style={{textDecoration: 'none'}}>
                <Heading fontFamily={"Chakra Petch"} textAlign={"center"} fontSize={[50, 70]}  
                mt={15}>FBR Studios</Heading>

                </Link>

                

                </ChakraProvider>
            </Center>

            <Center bg={colours.white}>
            <Link style={{textDecoration: 'none'}} href="/">

            <Text  textAlign={"center"} mt={-2} fontFamily={"Chakra Petch"} fontSize={[18, 25]}>The Search Engine Specialist</Text>

            </Link>
            

            </Center>
<Center bg={colours.white} boxShadow={'md'} >

    <Flex>
      <Flex
        // position="fixed"
        top="1rem"
        right="1rem"
        align="center"
      >
        {/* Desktop */}
        <Flex
          display={['none', 'none', 'flex','flex']}
        >
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
        </Flex>

        {/* Mobile */}
        <IconButton
          aria-label="Open Menu"
          bg={colours.lightblue}
          color={colours.white}
          size="md"
          mr={2}
          mt={5}
          mb={5}
          icon={
            <HamburgerIcon />
          }
          onClick={() => changeDisplay('flex')}
          display={['flex', 'flex', 'none', 'none']}
        />

      </Flex>

      {/* Mobile Content */}
      <Flex
        w='100vw'
        display={display}
        bgColor="gray.50"
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
      >
        <Flex justify="flex-end">
          <IconButton
            mt={2}
            mr={2}
            aria-label="Open Menu"
            size="lg"
            icon={
              <CloseIcon />
            }
            onClick={() => changeDisplay('none')}
          />
        </Flex>

        <Flex
          flexDir="column"
          align="center"
        >
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

        </Flex>
      </Flex>
    </Flex>
    </Center>

    <br></br>
    <br></br>

    </>
  )
}