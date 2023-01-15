import * as React from "react"
import { Text, extendTheme, ChakraProvider, Heading, Center, Box, Container, Grid, GridItem, VStack, SimpleGrid, Stack, HStack, Icon } from "@chakra-ui/react"
import "@fontsource/overpass"
import "@fontsource/lato"
import Header from "../../components/navbar"
import Pages from "../../components/pages"
import { CheckIcon } from '@chakra-ui/icons';
import SmallWithSocial from "../../components/footer"
import colours from "../../config/colours"
import Pricing from "../../components/pricing"
import { DarkModeSwitch } from "../../components/navbar2"


const myTheme = extendTheme({
  fonts: {
    heading: "lato",
    body: "lato",    
  },

})

const features = Array.apply(null, Array(8)).map(function (x, i) {
    return {
      id: i,
      title: 'Lorem ipsum dolor sit amet',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
      id: i,
    };
  });

const WebDev2 = () => {
  return (
    <ChakraProvider>

        <DarkModeSwitch/>

        <Box p={0}>
      <Stack spacing={4} as={Container} maxW={'5xl'} textAlign={'center'}>
        <Heading fontSize={'3xl'}>Affordable Web Development For Small Businesses
        </Heading>
        <Text color={'gray.600'} fontSize={'xl'}>
        We work closely with you to make a website that is perfect for you and your business.
        Websites are a vital way to showcase your business, allowing potential customers to see your products, services and important information.
        A website built by FBR Studios is guaranteed to leave a positive impression on your customers. 
        </Text>
      </Stack>

      <Container maxW={'6xl'} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          
            <HStack align={'top'} bg={colours.white} maxW={'7xl'} padding={4} borderRadius={10} shadow="xl">
            <Box color={'green.400'} px={2} position={'absolute'}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack textAlign={'center'}>
                <Text fontWeight={600}>Driven by SEO</Text>
                <Text color={'gray.600'}>We make your business show up on search engines. Increasing your visibility and driving more traffic to your website.</Text>
              </VStack>
            </HStack>

            <HStack align={'top'} bg={colours.white} maxW={'7xl'} padding={4} borderRadius={10} shadow="xl">
            <Box color={'green.400'} px={2} position={'absolute'}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack textAlign={'center'}>
                <Text fontWeight={600}>Built for Speed</Text>
                <Text color={'gray.600'}>We make sure your website loads fast. We use the latest technologies to make sure your website is fast and secure.</Text>
              </VStack>
            </HStack>

            <HStack align={'top'} bg={colours.white} maxW={'7xl'} padding={4} borderRadius={10} shadow="xl">
            <Box color={'green.400'} px={2} position={'absolute'}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack textAlign={'center'}>
                <Text fontWeight={600}>Built for Mobile</Text>
                <Text color={'gray.600'}>We make sure your website looks amazing on all devices. Allowing your customers to access your website from anywhere.</Text>
              </VStack>
            </HStack>

            <HStack align={'top'}  bg={colours.white} maxW={'7xl'} padding={4} borderRadius={10} shadow="xl">
            <Box color={'green.400'} px={2} position={'absolute'}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack textAlign={'center'}>
                <Text fontWeight={600}>Integrated Analytics</Text>
                <Text color={'gray.600'}>We integrate Google Analytics to make sure you can track your website's performance and make decisions based on data. </Text>
              </VStack>
            </HStack>

            <HStack align={'top'} bg={colours.white} maxW={'7xl'} padding={4} borderRadius={10} shadow="xl">
            <Box color={'green.400'} px={2} position={'absolute'}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack textAlign={'center'}>
                <Text fontWeight={600}>Affordable</Text>
                <Text color={'gray.600'}>The average price of a website is around £2,000. At FBR Studios we charge just £300 upfront and then £30 a month.   </Text>
              </VStack>
            </HStack>

            <HStack align={'top'} bg={colours.white} maxW={'7xl'} padding={4} borderRadius={10} shadow="xl">
              <Box color={'green.400'} px={2} position={'absolute'}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack textAlign={'center'}>
                <Text fontWeight={600}>Fully Managed</Text>
                <Text color={'gray.600'}>You get a 5 page website, hosting, SSL Certificate, Google Analytics and so much more. You won't have to worry about anything.   </Text>
              </VStack>
            </HStack>

            <HStack align={'top'} bg={colours.white} maxW={'7xl'} padding={4} borderRadius={10} shadow="xl">
            <Box color={'green.400'} px={2} position={'absolute'}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack textAlign={'center'}>
                <Text fontWeight={600}>Built for You</Text>
                <Text color={'gray.600'}>You will get a front end website that is inspired by designs that you think fits in with your business. </Text>
              </VStack>
            </HStack>

            <HStack align={'top'}bg={colours.white} maxW={'7xl'} padding={4} borderRadius={10} shadow="xl">
            <Box color={'green.400'} px={2} position={'absolute'}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack textAlign={'center'}>
                <Text fontWeight={600}>Aftercare</Text>
                <Text color={'gray.600'}>You will recieve continued support from us. Just in case anything goes wrong or you want to make any changes.</Text>
              </VStack>
            </HStack>



        </SimpleGrid>
      </Container>
    </Box>

    <Pricing/>

    <Text align={"center"} fontSize={25} fontWeight={"bold"} mt={10} mb={5}>Got Questions? Ask them here! </Text>

      <iframe src="https://www.cognitoforms.com/f/w7oGKl5blkyNwDqf9gtIig/1" width={"100%"} height="270"></iframe>
      <script src="https://www.cognitoforms.com/f/iframe.js"></script>




<SmallWithSocial/>

    </ChakraProvider>
  )
}

export default WebDev2

export const Head = () => <title>Home Page</title>
