import { Button, Card, CardBody, CardFooter, Center, extendTheme, Heading, Image, Stack, Text } from '@chakra-ui/react'
import "@fontsource/lato"
import "@fontsource/overpass"
import "@fontsource/questrial"
import { Link } from 'gatsby'
import * as React from "react"
import colours from '../config/colours'


const myTheme = extendTheme({
    fonts: {
      heading: "lato",
      body: "lato",
      
    },
    styles: {
        global: {
          body: {
            bg: "#f5f5f5",
          },
        },
      },
  })

export default function BestSellingServices() {
    return(
        <>

        <Center pt={10} pb={10}> 
            <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            bg={colours.white}
            // width={"50%"}
            maxW={{ base: '90%'}}
            >
            <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src='https://images.unsplash.com/photo-1600783245777-080fd7ff9253?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80'
                alt='SEO for Small Business'
            />

            <Stack>
                <CardBody>
                <Heading size='md'>Full SEO Audit</Heading>

                <Text py='2'>
                    The best way to improve your small business' online presence. We provide an in depth analysis of your website and guide you on how to improve your SEO.

                </Text>

                <Text color={colours.lightblue} fontSize='2xl'>
                    £30
                </Text>
                </CardBody>

                <CardFooter>
                <Link href={'/services'}>
                <Button variant='solid' bg={colours.lightblue} color={colours.white}>
                    View More
                </Button>
                </Link>

                <Link href={'https://buy.stripe.com/fZe4jW5ZK9gq93yeUU'}>
                <Button variant='solid' bg={colours.lightblue} color={colours.white} marginLeft={5}>
                    Buy Now
                </Button>
                </Link>
                </CardFooter>
            </Stack>
            </Card>
            </Center>

        </>
    )
}