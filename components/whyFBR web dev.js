import { Box, Card, CardBody, CardHeader, Center, Heading, Stack, StackDivider, Text } from "@chakra-ui/react"
import "@fontsource/lato"
import "@fontsource/overpass"
import * as React from "react"
import colours from "../config/colours"



export default function WhyFBRWeb() {
    return(
        <>
        <Center>
        <Card width={['90%', '90%', '90%', '50%']}             boxShadow={'xl'}
             mt={10} bg={colours.white}>
        <CardHeader>
        <Heading size='md'>Why Choose FBR Studios?</Heading>
        </CardHeader>

        <CardBody>
        <Stack divider={<StackDivider />} spacing='4'>
            <Box>
            <Heading size='xs' textTransform='uppercase'>
                Dedicated at Boosting your Online Presence
            </Heading>
            <Text pt='2' fontSize='sm'>
                A website is the first impression that your customers will have of your business. We'll make sure that the first impression is positive. FBR Studios are search 
                engine specialists which means that we will develop a website that is optimised for search engines. 
                This will help drive traffic to your website and therefore your business.

            </Text>
            </Box>
            <Box>
            <Heading size='xs' textTransform='uppercase'>
                Small Business Specialist
            </Heading>
            <Text pt='2' fontSize='sm'>
                We are a small business ourselves and we understand the challenges that small businesses face. 
                We give a tailored service depending on the type of business that you are. Whether you have a local business or an online business, we can give you a great website,
                based on your needs.
            </Text>
            </Box>
            <Box>
            <Heading size='xs' textTransform='uppercase'>
                get a Great website at an affordable price
            </Heading>
            <Text pt='2' fontSize='sm'>
                You will recieve a unique website that is modern and responsive. We work with you to create a website that is designed with your business in mind.
                Choose a style that suits your business and we will create a website that fits your needs.
            </Text>
            </Box>
        </Stack>
        </CardBody>
        </Card>
        </Center>
</>
    )
}