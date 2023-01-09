import { Box, extendTheme, Button, ButtonGroup, Center, Heading, ChakraProvider } from '@chakra-ui/react'
import { Link } from 'gatsby'
import "@fontsource/overpass"
import "@fontsource/lato"
import "@fontsource/questrial"
import * as React from "react"

const myTheme = extendTheme({
    fonts: {
      heading: "lato",
      body: "lato",
      
    },
  })

export default function Pages() {
    return(
        <>
        {/* <Box bg='#f5f5f5'/> */}
        <Box bg='#DCE2EF'/>
        </>
    )
}