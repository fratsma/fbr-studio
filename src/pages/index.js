import { Center, ChakraProvider, extendTheme, Text } from "@chakra-ui/react"
import "@fontsource/lato"
import "@fontsource/overpass"
import * as React from "react"
import { Helmet, HelmetProvider } from 'react-helmet-async'
import BestSellingServices from "../../components/bestSellingServices"
import MyCard from "../../components/card"
import SmallWithSocial from "../../components/footer"
import Hero from "../../components/hero"
import { DarkModeSwitch } from "../../components/navbar2"
import PurposeCard from "../../components/purposeCard"
import SocialProfile from "../../components/social"


const myTheme = extendTheme({
  fonts: {
    heading: "lato",
    body: "lato",    
  },

})



const IndexPage = () => {
  return (
    

    <ChakraProvider>
      <HelmetProvider>
        <Helmet>
          <title>Home: FBR Studios</title>
          <meta name="description" content="Helping small businesses with their SEO. We make affordable and simple solutions allowing your business to rank on Google" />
        </Helmet>
{/* 
      <title>FBR Studios: Home</title>
    <meta>name="Helping small businesses with their SEO. We make affordable and simple solutions allowing your business to rank on Google'</meta> */}

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

        <Text align={"center"} fontSize={[30, 35, 40, 40]} fontWeight={"bold"}> What is the purpose of FBR Studios?  </Text>
        
        <PurposeCard/>


        <Text align={"center"} fontSize={[30, 35, 40, 40]} fontWeight={"bold"} pt={35}> Featured Products </Text>

        <BestSellingServices/>

        <Text align={"center"} fontSize={[30, 35, 40, 40]} fontWeight={"bold"}> Who is Behind FBR Studios </Text>


        <SocialProfile/>

        <SmallWithSocial/>

      </HelmetProvider>
    </ChakraProvider>

    
  )
}

export default IndexPage

export const Head = () => <title>FBR Studios: The SEO Specialist</title>
