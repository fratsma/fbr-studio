import { Box, Card, CardBody, CardHeader, Center, Heading, Stack, StackDivider, Text } from "@chakra-ui/react"
import "@fontsource/lato"
import "@fontsource/overpass"
import * as React from "react"
import colours from "../config/colours"



export default function WhyFBR() {
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
                In Depth Analysis
            </Heading>
            <Text pt='2' fontSize='sm'>
                There are more than 200 different factors that are effecting your SEO score. We do a full in depth analysis of your website
            and give you a clear report on what you need to do to improve your SEO. We will break down this analysis into easy to understand steps that 
            you can follow to improve your SEO.
            </Text>
            </Box>
            <Box>
            <Heading size='xs' textTransform='uppercase'>
                Small Business Specialist
            </Heading>
            <Text pt='2' fontSize='sm'>
                We are a small business ourselves and we understand the challenges that small businesses face. 
                We give a unique service depending on the type of business that you are. Whether you have a local business or an online business, we can help you
                optimise your SEO in the most valuable way. 
            </Text>
            </Box>
            <Box>
            <Heading size='xs' textTransform='uppercase'>
                Great service, affordable price
            </Heading>
            <Text pt='2' fontSize='sm'>
                Other companies that offer similar experiences will give you an feedback based on an automated program that they run. At FBR Studios we actually look at your 
                business and understand that you are unique. We will give you a personalised service that is tailored to your business. 
                We are confident that you will get a great service at an affordable price.
            </Text>
            </Box>
        </Stack>
        </CardBody>
        </Card>
        </Center>
</>
    )
}