import { CheckIcon } from '@chakra-ui/icons'
import { Box, Center, ChakraProvider, Heading, Icon, Text } from "@chakra-ui/react"
import "@fontsource/lato"
import * as React from "react"
import SmallWithSocial from "../../components/footer"
import { DarkModeSwitch } from "../../components/navbar2"
import colours from "../../config/colours"


const PaymentComplete = () => {
    return(
        <ChakraProvider>

            <DarkModeSwitch/>

            <Center mt={20}>

            <Box
            maxW={'500px'}
            bg={colours.white}  padding={10} borderRadius={35} shadow="xl"
            alignItems={"center"}
            >

               <Center>
                
                    <Icon  as={CheckIcon} color="green.500" width={"50%"} height={"15%"} mb={5}/>
                </Center> 





            <Heading fontSize={'5xl'} textAlign={"center"}>Payment Complete!
            </Heading>


            <Text mt={2} textAlign={'center'}>Thank you so much for your purchase</Text>


            <Text mt={2} textAlign={'center'}>If you have any questions, please email us</Text>

            <Text  textAlign={'center'}>info@fbrstudios.com</Text>

            </Box>
            </Center>

            <Heading mt={20} fontSize={'3xl'} textAlign={"center"}>Before you leave, we need your website!
            </Heading>

            <Center>


            <Box            minW={'50%'}
            bg={colours.white}  padding={10} borderRadius={10} mt={10} shadow="xl" > 


            <iframe title='payment complete' src="https://www.cognitoforms.com/f/w7oGKl5blkyNwDqf9gtIig/2" width={"100%"} height="150"></iframe>
            <script src="https://www.cognitoforms.com/f/iframe.js"></script>
            </Box>

            
            </Center>

            <SmallWithSocial/>



        </ChakraProvider>
    )}

export default PaymentComplete

export const Head = () => <title>Payment Complete</title>
