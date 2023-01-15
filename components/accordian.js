import { Box, extendTheme, Button, ButtonGroup, Center, Heading, ChakraProvider, Text, SimpleGrid, Wrap, WrapItem , Stack, Divider,   List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,} from '@chakra-ui/react'
import { Link } from 'gatsby'
import "@fontsource/overpass"
import "@fontsource/lato"
import "@fontsource/questrial"
import * as React from "react"
import colours from '../config/colours'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { MdCheckCircle, CheckIcon} from '@chakra-ui/icons'

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'

  export default function FAQ(props) {
    return(
            

            <Accordion allowToggle minW={"50%"} mt={10}>
            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left' fontWeight={"bold"}>
                    {props.item1Title}
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                {props.item1Content}
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left' fontWeight={"bold"}>
                    {props.item2Title}
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                {props.item2Content}
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left' fontWeight={"bold"}>
                    {props.item3Title}
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                {props.item3Content}
                </AccordionPanel>
            </AccordionItem>


            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left' fontWeight={"bold"}>
                    {props.item4Title}
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                {props.item4Content}
                </AccordionPanel>
            </AccordionItem>
            </Accordion>




                )
  }
