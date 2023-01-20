import { Center, ChakraProvider, Heading, Text, Wrap, WrapItem } from "@chakra-ui/react"
import "@fontsource/lato"
import "@fontsource/overpass"
import * as React from "react"
import { Helmet, HelmetProvider } from 'react-helmet-async'
import FaQ from "../../components/accordian"
import SmallWithSocial from "../../components/footer"
import { DarkModeSwitch } from "../../components/navbar2"
import Products from "../../components/products"



const Services = () => {
  return (
    <ChakraProvider>

      <HelmetProvider>
        <Helmet>
          <title>Services: FBR Studios</title>
          <meta name="description" content="What services does FBR Studios provide to help your small business rank on Google and other search engines" />
        </Helmet>

      {/* <title>FBR Studios: Services</title>
      <meta>name="What services does FBR Studios provide to help your small business rank on Google and other search engines'</meta> */}

        <DarkModeSwitch/>

        {/* <Text align={"center"} fontSize={25} fontWeight={"bold"}> Services  </Text> */}
        <Center>

        <Heading fontSize={'3xl'} textAlign={"center"} as="h1">What SEO Services Do We Offer?
        </Heading>
        </Center>

        <Wrap spacing="20px" justify="center" margin={0}>
        <WrapItem>


          {/* <Center> */}
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

          link="https://buy.stripe.com/fZe4jW5ZK9gq93yeUU"


          secondDescription="The audit will be sent in jargon free document that will thouroughly explain 
          what needs to be done to improve your SEO. "


          price="£30"
          deliveryTime="Delivery Time: 1-3 Days"
          />
          </WrapItem>

          <WrapItem>

          <Products title="Full SEO Audit with Follow Up"
          description="We will provide 2 full SEO Audits.  
          The second audit will show the improvements that have been made since the first one and spot any new opportunities."

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

          secondDescription="You get to choose the time between the audits. 
          We recommend around 2 months, as it takes time for SEO changes to take effect."


          price="£50"
          deliveryTime="Delivery Time: 1-3 Days"
          link="https://buy.stripe.com/aEUg2Edsc2S24Ni8wy"


          />
          </WrapItem>
          <WrapItem>
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

          link="https://buy.stripe.com/bIY3fSfAkgIS2Fa8wx"

                
          />
          </WrapItem>

          
        {/* </Center> */}

        </Wrap>

        <Text align={"center"} fontSize={25} fontWeight={"bold"}> Frequently Asked Questions  </Text>

        <Center>

        <FaQ
        
        item1Title="How will I recieve my audit?"
        item1Content="The audit will be sent in a PDF document via the email that you provide in checkout."
        
        item2Title="I don't understand a part of my audit, what should I do?"
        item2Content="Fear not! Whilst we try and make our audit as simple to understand as possible, we recognise that some parts may be confusing.
        Please contact us via email and we will be happy to explain any part of the audit that you don't understand."

        item3Title="How do I request the follow up audit?"
        item3Content="Once you have recieved your first audit, you will be able to request the follow up audit via email. Whilst we recommend around 2 months wait between audits,
        you can request it anytime from 1 week - 6 months after the first audit. The second audit will arrive between 1-3 days after we receive your request." 

        item4Title="How does the fully managed SEO work?"
        item4Content="Once you have purchased the fully managed SEO, we will contact you via email to discuss your website. 
        We will take a dive into your SEO and analyse what can be improved. 
        Once we have done this, we can start optimising your website. For example, we will 
        slightly alter content on your site to improve keyword optimisation and optimise image's to improve site speed."

        />

        

        </Center>

        <Text align={"center"} fontSize={25} fontWeight={"bold"} mt={10} mb={5}>Got Questions? Ask them here! </Text>

        <iframe title="contact form" src="https://www.cognitoforms.com/f/w7oGKl5blkyNwDqf9gtIig/1" width={"100%"} height="270"></iframe>
        <script src="https://www.cognitoforms.com/f/iframe.js"></script>




        <SmallWithSocial/>

        </HelmetProvider>
    </ChakraProvider>

    
  )
}

export default Services

export const Head = () => <title>Services</title>
