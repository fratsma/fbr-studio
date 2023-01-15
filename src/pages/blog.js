import * as React from "react"
import { Text, extendTheme, ChakraProvider, Heading, Center } from "@chakra-ui/react"
import "@fontsource/overpass"
import "@fontsource/lato"
import Header from "../../components/navbar"
import Pages from "../../components/pages"
import { DarkModeSwitch } from "../../components/navbar2"
import ArticleList from "../../components/blogArticleList"

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

        <Heading fontSize={'3xl'} textAlign={"center"} mb={10}>Posts to Help Your Business Improve It's SEO 
        </Heading>

        <ArticleList 
        title="Why Page Speed is Important for SEO"
        description="In this post, we will discuss the importance of page speed for SEO and how to optimize your 
        website's page speed to improve user experience and increase the chances of ranking higher in search results.
         We will also provide tips and best practices for optimizing images, minifying code, and using a content delivery network (CDN) to improve page speed."
         imageLink="https://images.unsplash.com/photo-1509099652299-30938b0aeb63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3BlZWR8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
          imageAlt="Page Speed Image"
          ArticleLink="/"
        />



    </ChakraProvider>
  )
}

export default SEO

export const Head = () => <title>Home Page</title>
