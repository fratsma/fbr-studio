import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import {
  Button, Center, ChakraProvider, extendTheme, Flex, Heading, IconButton,
  Link, Text, useColorMode
} from '@chakra-ui/react'
import * as React from "react"
import { useState } from 'react'
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


export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  const [display, changeDisplay] = useState('none')
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
          size="lg"
          mr={2}
          mt={5}
          mb={10}
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

    </>
  )
}