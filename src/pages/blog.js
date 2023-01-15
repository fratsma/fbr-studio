import * as React from "react"
import { Text, extendTheme, ChakraProvider, Heading, Center } from "@chakra-ui/react"
import "@fontsource/overpass"
import "@fontsource/lato"
import Header from "../../components/navbar"
import Pages from "../../components/pages"
import { DarkModeSwitch } from "../../components/navbar2"

const myTheme = extendTheme({
  fonts: {
    heading: "lato",
    body: "lato",    
  },

})



const SEO = () => {
  return (
    <ChakraProvider>


        <DarkModeSwitch/>



    </ChakraProvider>
  )
}

export default SEO

export const Head = () => <title>Home Page</title>
