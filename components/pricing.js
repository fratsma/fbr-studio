import * as React from "react";

import {
  Box, Button, Center, Link, Stack, Text, useColorModeValue
} from '@chakra-ui/react';
import colours from "../config/colours";

export default function Pricing() {
  return (
    <Center py={6} marginTop={5}> 
      <Box
        maxW={'330px'}
        bg={colours.white}  padding={4} borderRadius={10} shadow="xl">
        <Stack
          textAlign={'center'}
          p={6}
          color={useColorModeValue('gray.800', 'white')}
          align={'center'}>

          <Stack direction={'row'} align={'center'} justify={'center'}>
            <Text fontSize={'3xl'}>£</Text>
            <Text fontSize={'6xl'} fontWeight={800}>
              300
            </Text>
            <Text color={'gray.500'}>/upfront</Text>
          </Stack>
          <Stack direction={'row'} align={'center'} justify={'center'}>
            <Text fontSize={'3xl'}>£</Text>
            <Text fontSize={'6xl'} fontWeight={800}>
              30
            </Text>
            <Text color={'gray.500'}>/month</Text>
          </Stack>
        </Stack>

            <Link href="https://buy.stripe.com/eVaeYA5ZKboy4NieUZ">
          <Center>
          <Button
            mb={5}
            width={'50%'}
            bg={colours.lightblue}
            color={'white'}
            rounded={'xl'}
            variant={'solid'}
            _hover={{
                bg: 'green.500',
            }}
>
                        Buy Now
                    </Button>
                    
                </Center>  
                    </Link>
        </Box>
      
    </Center>
  );
}
