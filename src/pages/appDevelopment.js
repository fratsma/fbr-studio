import * as React from "react"
import { Text, extendTheme, ChakraProvider, Heading, Center } from "@chakra-ui/react"
import "@fontsource/overpass"
import "@fontsource/lato"
import Header from "../../components/navbar"
import Pages from "../../components/pages"

const myTheme = extendTheme({
  fonts: {
    heading: "lato",
    body: "lato",    
  },

})



const AppDevelopment = () => {
  return (
    <ChakraProvider>

        <Header/>

        <Text>App Development</Text> 


    </ChakraProvider>
  )
}

export default AppDevelopment

export const Head = () => <title>App Development</title>
