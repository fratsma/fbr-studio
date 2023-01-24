import { Box, Card, CardBody, CardHeader, Center, Heading, Stack, StackDivider, Text } from "@chakra-ui/react"
import "@fontsource/lato"
import "@fontsource/overpass"
import * as React from "react"
import colours from "../config/colours"



export default function PurposeCard() {
    return(
        <>
        <Center>
        <Card width={['90%', '90%', '90%', '50%']}             boxShadow={'xl'}
             mt={10} bg={colours.white}>
        <CardHeader>
        <Heading size='md'>Helping small businesses reach their online audience through SEO</Heading>
        </CardHeader>

        <CardBody>
        <Stack divider={<StackDivider />} spacing='4'>
            <Box>
            <Heading size='xs' textTransform='uppercase'>
                Making it easy
            </Heading>
            <Text pt='2' fontSize='sm'>
                It's difficult for small businesses to optimise their online presence. We make it easy. There are over 200 different factors affecting your SEO and it is difficult 
                to know where to start. With FBR Studios, there is no need to spend time researching and auditing. We do it all for you.
            </Text>
            </Box>
            <Box>
            <Heading size='xs' textTransform='uppercase'>
                Making It Clear
            </Heading>
            <Text pt='2' fontSize='sm'>
                We make it clear what you need to do to improve your SEO. We also keep our pricing transparrent, never any hidden costs. 
                We give you clear steps and guidance on how to improve your SEO and give you an action plan on how to do it.
            </Text>
            </Box>
            <Box>
            <Heading size='xs' textTransform='uppercase'>
                Making It Affordable
            </Heading>
            <Text pt='2' fontSize='sm'>
                We have different packages to suit any budget. No matter the package, you are guaranteed to get a great service which will allow you to boost your online presence.
                You should also take advantage of our free blog posts, which are a great way to learn about SEO.
            </Text>
            </Box>
        </Stack>
        </CardBody>
        </Card>
        </Center>
</>
    )
}