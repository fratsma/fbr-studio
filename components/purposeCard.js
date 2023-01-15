import * as React from "react"
import { Text, extendTheme, ChakraProvider, Heading, Center, Button, SimpleGrid, Divider, Box, Stack, StackDivider } from "@chakra-ui/react"
import "@fontsource/overpass"
import "@fontsource/lato"
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import colours from "../config/colours"



export default function PurposeCard() {
    return(
        <>
        <Center>
        <Card maxW={{ base: '90%'}} mt={10} bg={colours.white}>
        <CardHeader>
        <Heading size='md'>Helping small businesses reach their online audience</Heading>
        </CardHeader>

        <CardBody>
        <Stack divider={<StackDivider />} spacing='4'>
            <Box>
            <Heading size='xs' textTransform='uppercase'>
                Making it easy
            </Heading>
            <Text pt='2' fontSize='sm'>
                It's difficult to optimise your online presence. We make it easy.
            </Text>
            </Box>
            <Box>
            <Heading size='xs' textTransform='uppercase'>
                Making It Clear
            </Heading>
            <Text pt='2' fontSize='sm'>
                We make it clear what you need to do to improve your SEO. We also keep our pricing transparrent, never any hidden costs.
            </Text>
            </Box>
            <Box>
            <Heading size='xs' textTransform='uppercase'>
                Making It Affordable
            </Heading>
            <Text pt='2' fontSize='sm'>
                We have different packages to suit any budget. You should also take advantage of our free blog posts, which are a great way to learn about SEO.
            </Text>
            </Box>
        </Stack>
        </CardBody>
        </Card>
        </Center>
</>
    )
}