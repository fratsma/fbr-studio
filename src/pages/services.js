import * as React from "react"
import { Text, extendTheme, ChakraProvider, Heading, Center, Button, SimpleGrid, Divider, Box, Stack, StackDivider, Wrap, WrapItem } from "@chakra-ui/react"
import "@fontsource/overpass"
import "@fontsource/lato"
import Header from "../../components/navbar"
import Pages from "../../components/pages"
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import MyCard from "../../components/card"
import PurposeCard from "../../components/purposeCard"
import BestSellingServices from "../../components/bestSellingServices"
import Products from "../../components/products"

const myTheme = extendTheme({
  fonts: {
    heading: "lato",
    body: "lato",    
  },

})



const Services = () => {
  return (
    <ChakraProvider>

        <Header/>

        <Text align={"center"} fontSize={25} fontWeight={"bold"}> Services  </Text>

          <Center>
          <Products title="Full SEO Audit" 
          description="The best way to improve your small business' online presence. We provide an in depth analysis of your website and guide you on how to improve your SEO." 
          subTitle="What you get:"
          listItem1="Site Speed Analysis"
          listItem2="Keyword Ranking"
          listItem3="Backlink Checks"
          listItem4="Content Analysis"
          listItem6="Competitor Analysis"
          listItem5="Metadata Utilisation"
          listItem7="User Experience"
          listItem8="Cross Device Compatibility"
          listItem9="Local SEO Analysis"

          secondDescription="The audit will be sent in jargon free document that will thouroughly explain 
          what needs to be done to improve your SEO. "


          price="£30"
          deliveryTime="Delivery Time: 1-3 Days"
          />
          


          
        </Center>


    </ChakraProvider>

    
  )
}

export default Services

export const Head = () => <title>Services</title>
