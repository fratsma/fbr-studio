import { Button, Card, CardBody, CardFooter, CardHeader, extendTheme, Heading, Text, Wrap, WrapItem } from '@chakra-ui/react'
import "@fontsource/lato"
import "@fontsource/overpass"
import "@fontsource/questrial"
import { Link } from 'gatsby'
import * as React from "react"
import colours from '../config/colours'



export default function MyCard() {
    return(
        <>


            {/* <SimpleGrid  pt={10} spacing={4} columns={3} > */}
            <Wrap spacing="30px" justify="center" padding={10}>
            <WrapItem>

            
            <Card bg={colours.white} maxWidth={450} height={250} shadow="xl">
                <CardHeader >
                <Heading size='md'>Search Engine Optimisation</Heading>
                </CardHeader>
                <CardBody>
                <Text>See how your business' website can improve their SEO and learn how to boost your ranking.</Text>
                </CardBody>
                <CardFooter>
                <Link href="/services" passHref>
                <Button bg={colours.lightblue} color={colours.white}>View More</Button>
                </Link>
                </CardFooter>
            </Card>
            </WrapItem>
            <WrapItem >
            <Card bg={colours.white} maxWidth={450} height={250} shadow="xl">
                <CardHeader>
                <Heading size='md'>Website Development</Heading>
                </CardHeader>
                <CardBody>
                <Text>Find out what services we provide to help you improve your SEO.</Text>
                </CardBody>
                <CardFooter>
                <Link href="/webDev" passHref>
                <Button bg={colours.lightblue} color={colours.white}>View More</Button>
                </Link>
                
                </CardFooter>
            </Card>
            </WrapItem>
            <WrapItem>
            <Card bg={colours.white} maxWidth={450} height={250} shadow="xl">
                <CardHeader>
                <Heading size='md'>SEO Blog</Heading>
                </CardHeader>
                <CardBody>
                <Text>Find out how to get your business to show up on Google! View blog posts and learn more about SEO without all the jargon.</Text>
                </CardBody>
                <CardFooter>
                <Link href="/blog" passHref>
                <Button bg={colours.lightblue} color={colours.white}>View More</Button>
                </Link>
                </CardFooter>
            </Card>
            </WrapItem>
            {/* </SimpleGrid> */}
            </Wrap>


        </>
    )
}