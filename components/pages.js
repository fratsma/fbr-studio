import { Box, extendTheme } from '@chakra-ui/react'
import "@fontsource/lato"
import "@fontsource/overpass"
import "@fontsource/questrial"
import "@fontsource/chakra-petch"

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