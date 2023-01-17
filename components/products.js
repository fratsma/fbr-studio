import { CheckIcon } from '@chakra-ui/icons'
import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, extendTheme, Heading, List, ListIcon, ListItem, Stack, Text } from '@chakra-ui/react'
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

export default function Products(props) {
    return(
        <>
            
            <Card shadow="xl" maxW='sm' bg={colours.white} margin={10} height={750}>
            <CardBody>
                <Stack mt='6' spacing='3'>
                <Heading size='md'>{props.title}</Heading>
                <Text>
                    {props.description}
                </Text>
                <Heading size='sm'>{props.subTitle}</Heading>
                <List>
                <ListItem>
                    <ListIcon as={CheckIcon} color='green.500' />
                    {props.listItem1}
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} color='green.500' />
                    {props.listItem2}
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} color='green.500' />
                    {props.listItem3}
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} color='green.500' />
                    {props.listItem4}
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} color='green.500' />
                    {props.listItem5}
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} color='green.500' />
                    {props.listItem6}
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} color='green.500' />
                    {props.listItem7}
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} color='green.500' />
                    {props.listItem8}
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} color='green.500' />
                    {props.listItem9}
                </ListItem>
                
                </List>

                <Text>
                    {props.secondDescription}
                </Text>
   
                <Text color={colours.lightblue} fontSize='2xl' >
                    {props.price}
                </Text>
                <Text color={colours.lightblue} fontSize='sm'>
                    {props.deliveryTime}
                </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                <Link href={props.link} >

                <Button variant='solid' bg={colours.lightblue} color={colours.white}    
                _hover={{
                bg: 'green.500',
            }}>
                    Buy now
                </Button>
                </Link>

                </ButtonGroup>
            </CardFooter>
            </Card>

            


        </>
    )
}