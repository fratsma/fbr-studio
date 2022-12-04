import * as React from "react"
import { Text, extendTheme, ChakraProvider, Heading } from "@chakra-ui/react"
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



const IndexPage = () => {
  return (
    <ChakraProvider>

        <Header/>

        <Text>Test</Text>
        

    </ChakraProvider>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
