import * as React from "react"
import { Text, extendTheme, ChakraProvider, Heading, Center, Button, SimpleGrid, Divider, Box, Stack, StackDivider } from "@chakra-ui/react"
import "@fontsource/overpass"
import "@fontsource/lato"
import Header from "../../components/navbar"
import Pages from "../../components/pages"
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import MyCard from "../../components/card"
import PurposeCard from "../../components/purposeCard"
import BestSellingServices from "../../components/bestSellingServices"
import SmallWithSocial from "../../components/footer"
import Hero from "../../components/hero"
import { DarkModeSwitch } from "../../components/navbar2"

const myTheme = extendTheme({
  fonts: {
    heading: "lato",
    body: "lato",    
  },

})



const IndexPage = () => {
  return (
    <ChakraProvider>

        <DarkModeSwitch/>

        {/* <Center>
        <Heading fontSize={'3xl'}>Home Page
        </Heading>
        </Center>   */}

        <Hero/>


        <Center>
          <MyCard/>
        </Center>

        {/* <Divider  borderWidth={1}/> */}

        <Text align={"center"} fontSize={25} fontWeight={"bold"}> What is the purpose of FBR Studios?  </Text>
        
        <PurposeCard/>


        <Text align={"center"} fontSize={25} fontWeight={"bold"} pt={35}> Featured Products </Text>

        <BestSellingServices/>

        <SmallWithSocial/>

    </ChakraProvider>

    
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
