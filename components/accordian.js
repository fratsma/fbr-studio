import { Box} from '@chakra-ui/react'
import "@fontsource/overpass"
import "@fontsource/lato"
import * as React from "react"

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'

  export default function FaQ(props) {
    return(
            

        <Box width={['90%', '90%', '90%', '50%']}>
            <Accordion allowToggle  mt={10}>
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



            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left' fontWeight={"bold"}>
                    {props.item5Title}
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                {props.item5Content}
                </AccordionPanel>
            </AccordionItem>
            




            </Accordion>

            

            </Box>




                )
  }
