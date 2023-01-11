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
          listItem5="Metadata Analysis"
          listItem7="User Experience"
          listItem9="Up to 5 Pages Analysed"
          listItem8="Local SEO Analysis"

          secondDescription="The audit will be sent in jargon free document that will thouroughly explain 
          what needs to be done to improve your SEO. "


          price="£30"
          deliveryTime="Delivery Time: 1-3 Days"
          />


          <Products title="Full SEO Audit with Follow Up"
          description="We will provide 2 full SEO Audits. The second audit will take place 1-3 months after the first one. 
          This audit will show the improvements that have been made and spot any new opportunities."

          subTitle="What you get:"


          listItem1="Full SEO Audit x2"
          listItem2="Detailed Comparison"
          listItem3="Opportunities for Improvement"
          listItem4="Updated SEO Performance"
          listItem5="Progress Report"
          listItem6="Updated Keyword Analysis"
          listItem8="Optimisation Opportunities"
          listItem7="Content Comparison"
          listItem9="Up to 5 Pages Analysed"

          secondDescription="You get the freedom to decide the time between the two audits. 
          We recommend around 2 months, as it takes time for SEO changes to take effect."


          price="£50"
          deliveryTime="Delivery Time: 1-3 Days"

          />

          <Products title="Fully Managed SEO"
          description="Not only will you get a full SEO Audit, but we will make all the changes for you. 
          The best option for business' that don't have the time to manage their SEO themselves."
          
          
          subTitle="What you get:"

          listItem1="Full SEO Audit"
          listItem2="Keyword Optimisation"
          listItem3="Increasing backlinks"
          listItem4="Content Optimisation"
          listItem5="Metadata Utilisation"
          listItem6="Detailed Competitor Analysis"
          listItem7="Google MyBusiness Optimisation"
          listItem8="Local SEO Optimisation"
          listItem9="Up to 8 Pages Optimised"
          
          secondDescription="
          If you have a generated website (e.g. WordPress), we can make the changes directly. 
          Otherwise, we will send you a document with all the changes."

          price="£100"
          deliveryTime="Delivery Time: 1-2 Weeks"
                
          />


          
        </Center>


    </ChakraProvider>

    
  )
}

export default Services

export const Head = () => <title>Services</title>
