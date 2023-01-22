
import {
    Center, ChakraProvider, Container, extendTheme, Heading, Image,
    Text, useColorModeValue
  } from '@chakra-ui/react';
  import "@fontsource/lato"

  import * as React from "react";
  import { DarkModeSwitch } from "../../components/navbar2"
  import { Helmet, HelmetProvider } from 'react-helmet-async'
  import SmallWithSocial from "../../components/footer"
  import SocialProfile from "../../components/social"


  
  
  const myTheme = extendTheme({
      fonts: {
        heading: "lato",
        body: "lato",    
      },
    
    })
  
  export default function BlogPost(props) {
  
      return (
          <ChakraProvider theme={myTheme}>

                <HelmetProvider>
                <Helmet>
                <title>5 Simple Ways Small Businesses Can Improve Their Local SEO: FBR Studios</title>
                <meta name="description" content="How Small Businesses Can Improve Their Local SEO" />
                </Helmet>
        {/* 
      <title>FBR Studios: Home</title>
    <meta>name="Helping small businesses with their SEO. We make affordable and simple solutions allowing your business to rank on Google'</meta> */}

        <DarkModeSwitch/>
  
              <Center>
  
              <Heading as="h1" fontSize={[30, 35, 40, 40]} textAlign={"center"}>5 Simple Ways Small Businesses Can Improve Their Local SEO
          </Heading>
              </Center>
  
              <Center>
  
                  
  
              <Container mt={5} textAlign={'left'} minWidth={"40%"} mx='auto'>
  
              
              <Text
                as="p"
                marginTop="5"
                color={useColorModeValue('gray.700', 'gray.200')}
                fontSize="3xl"
                fontWeight={useColorModeValue('bold', 'extrabold')}
                >
                Introduction
              </Text>
  
  
              <Text
                as="p"
                marginTop="5"
                color={useColorModeValue('gray.700', 'gray.200')}
                fontSize="lg">
                Small businesses often face a challenging task when it comes to improving their local SEO. With so many larger companies dominating the search engine rankings,
                 it can be difficult for a small business to stand out. However, 
                there are several strategies that small businesses can use to improve their local SEO and increase their visibility online.
              </Text>
  
              <Image
                  marginTop="5"
  
                  src='/localoptimisation.png'
                  alt='SEO for Small Business'
              />
  
              <Text
                as="p"
                marginTop="5"
                color={useColorModeValue('gray.700', 'gray.200')}
                fontSize="3xl"
                fontWeight={useColorModeValue('bold', 'extrabold')}
                >
                Optimise your website
              </Text>
  
              
  
              <Text
                as="p"
                marginTop="5"
                color={useColorModeValue('gray.700', 'gray.500')}
                fontSize="lg">
                One of the most important things you can do to improve your local SEO is to optimize your website. 
                This includes making sure that your website is mobile-friendly, as more and more people are using their smartphones to browse the web. 
                Additionally, make sure that your website is fast-loading and easy to navigate. 
                This will help search engines like Google understand what your website is about and make it easier for people to find you.
              </Text>
  
              <Text
                as="p"
                marginTop="5"
                color={useColorModeValue('gray.700', 'gray.200')}
                fontSize="3xl"
                fontWeight={useColorModeValue('bold', 'extrabold')}
                >
                Get listed in online directories
              </Text>
  
  
              <Text
                as="p"
                marginTop="5"
                color={useColorModeValue('gray.700', 'gray.500')}
                fontSize="lg">
                Another effective way to improve your local SEO is to get listed in online directories. This includes directories like Google My Business, Bing Places, and Yelp.
                 By listing your business in these directories, you can make it easier for people to find your business when they search for products or services like yours.
              </Text>
  
              <Text
                as="p"
                marginTop="5"
                color={useColorModeValue('gray.700', 'gray.200')}
                fontSize="3xl"
                fontWeight={useColorModeValue('bold', 'extrabold')}
                >
                Use keywords in your content
              </Text>
  
  
              <Text
                as="p"
                marginTop="5"
                color={useColorModeValue('gray.700', 'gray.500')}
                fontSize="lg">
                Keywords are a crucial part of SEO, and this is particularly true when it comes to local SEO. By using keywords that are relevant to your business and location, 
                you can help search engines understand what your business is about and make it more likely that your website will rank well in local search results.
              </Text>
  
              <Text
                as="p"
                marginTop="5"
                color={useColorModeValue('gray.700', 'gray.200')}
                fontSize="3xl"
                fontWeight={useColorModeValue('bold', 'extrabold')}
                >
                Encourage customers to leave reviews
              </Text>
  
              <Text
                as="p"
                marginTop="5"
                color={useColorModeValue('gray.700', 'gray.500')}
                fontSize="lg">
                Reviews are an important part of local SEO, as they can help improve your visibility online and attract new customers. 
                Encourage your customers to leave reviews on sites like Google, Yelp, and Facebook. Make sure to respond to all reviews, whether they are positive or negative, 
                as this will show that you care about your customers and are committed to providing excellent service.
              </Text>
  
  
              <Text
                as="p"
                marginTop="5"
                color={useColorModeValue('gray.700', 'gray.200')}
                fontSize="3xl"
                fontWeight={useColorModeValue('bold', 'extrabold')}
                >
                Optimise for local keywords
              </Text>
  
          
  
              <Text
                as="p"
                marginTop="5"
                color={useColorModeValue('gray.700', 'gray.500')}
                fontSize="lg">
              To reach the local audience, it's important to optimize your website for local keywords. 
              This involves including your city, state, or region in your title tags, meta descriptions, and other on-page elements. 
              It's also helpful to include the name of your business, your address, and your phone number on your website, 
              so that search engines and customers can easily find your contact information.
              </Text>    

  
              <Text
                as="p"
                marginTop="5"
                color={useColorModeValue('gray.700', 'gray.200')}
                fontSize="3xl"
                fontWeight={useColorModeValue('bold', 'extrabold')}
                >
                Conclusion
              </Text>
  
          
  
              <Text
                as="p"
                marginTop="5"
                color={useColorModeValue('gray.700', 'gray.500')}
                fontSize="lg">
              In conclusion, small businesses can improve their local SEO by optimizing their website, getting listed in online directories, 
              using keywords in their content, encouraging customers to leave reviews, and optimizing for local keywords. By following these strategies, 
              small businesses can increase their visibility online and attract more customers to their business.
              </Text>    


              <Text align={"center"} fontSize={25} fontWeight={"bold"} mt={10}> The Author  </Text>


              <SocialProfile/>

  
              </Container>
              </Center>

              <SmallWithSocial/>

  
            </HelmetProvider>
          </ChakraProvider>

          
  
      )};

      export const Head = () => <title>5 Simple Ways Small Businesses Can Improve Their Local SEO: FBR Studios</title>
