import { ChakraProvider, extendTheme, Heading } from "@chakra-ui/react"
import "@fontsource/lato"
import "@fontsource/overpass"
import * as React from "react"
import { Helmet, HelmetProvider } from 'react-helmet-async'
import ArticleList from "../../components/blogArticleList"
import { DarkModeSwitch } from "../../components/navbar2"
import SmallWithSocial from "../../components/footer"




const myTheme = extendTheme({
  fonts: {
    heading: "lato",
    body: "lato",    
  },

})



const SEO = () => {
  return (
    <ChakraProvider>

      <HelmetProvider>
        <Helmet>
          <title>Blog: FBR Studios</title>
          <meta name="description" content='Blog posts about how small businesses can improve their SEO. Simple to understand and jargon free.' />
        </Helmet>

      {/* <title>FBR Studios: Blog</title>
      <meta>name="description" content='Blog posts about how small businesses can improve their SEO. Simple to understand and jargon free.'</meta> */}



        <DarkModeSwitch/>

        <Heading fontSize={[30, 35, 40, 40]} textAlign={"center"} mb={10}>Posts to Help Your Business Improve It's SEO 
        </Heading>


        <ArticleList 
        title="5 Simple Ways Small Businesses Can Improve Their Local SEO"
        description="This blog post aims to provide small businesses with effective strategies for improving their local SEO. 
        From optimising their website to getting listed in online directories and encouraging customers to leave reviews. 
        The post also highlights the importance of using relevant keywords and optimizing for local search. 
        Overall, the goal of the post is to help small businesses improve their online presence and drive more traffic to their website."
        imageLink="/localSEO.png"
        imageAlt="Local SEO Image"
        ArticleLink="/localSEO"
        />



        <ArticleList 
        title="Why Page Speed is Important for SEO"
        description="In this post, we will discuss the importance of page speed for SEO and how to optimize your 
        website's page speed to improve user experience and increase the chances of ranking higher in search results.
        We will also provide tips and best practices for optimizing images, minifying code, and using a content delivery network (CDN) to improve page speed."
        imageLink="/long exposure.jpg"
        imageAlt="Page Speed Image"
        ArticleLink="/pageSpeedBlog"
        />
        <SmallWithSocial/>


        </HelmetProvider>

    </ChakraProvider>
  )
}

export default SEO

export const Head = () => <title>FBR Studios: Blog</title>
