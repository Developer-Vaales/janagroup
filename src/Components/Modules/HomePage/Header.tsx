import FadeInWhenVisibleY from '@/Components/Layout/FadeWhenVisibleY'
import {
  Box,
  Container,
  Heading,
  Stack,
  Flex,
  Text,
  Button,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
      <Box
        w="100%"
        h="900px"
        // bgImg={'/home/header.webp'}
        bgPos={'center'}
        bgSize={'cover'}
        pos="relative"
        bg="#DAE6CC"
        // zIndex={'1'}
      >
        <Container
          display={'flex'}
          w="100%"
          h="100%"
          maxW="1500px"
          pos="relative"
          zIndex={'1'}
          flexDirection={{
            base: 'column-reverse',
            md: 'column-reverse',
            lg: 'row',
            xl: 'row',
          }}
        >
          <Stack
            h="100%"
            w={{ base: '100%', lg: '50%' }}
            justify={{ base: 'end', lg: 'end' }}
            pb="2rem"
          >
            <Box
              w={{ base: '100%', md: '772.5px' }}
              my={{ base: '1rem', lg: '1rem' }}
            >
              <FadeInWhenVisibleY>
                <Heading
                  as="h1"
                  fontSize={{ base: '40px', md: '60px', lg: '80px' }}
                  fontWeight={'700'}
                  fontFamily={'Poppins'}
                  lineHeight={{ base: '45px', md: '60px', lg: '70px' }}
                  color="#5A6A46"
                >
                  Our mission at Jana is to delight taste buds
                </Heading>
              </FadeInWhenVisibleY>
            </Box>
            <Stack gap="1rem">
              <FadeInWhenVisibleY>
                <Text
                  w={{ base: '100%', md: '90%' }}
                  fontSize={{ base: '14px', md: '18px' }}
                  fontWeight={'500'}
                  fontFamily={'Poppins'}
                  lineHeight={{ base: '22px', md: '30px' }}
                  color="#778666"
                >
                  The name “Jana” signifies accomplishments or the beginning of
                  something greater. In the rich tapestry of UAE traditions,
                  plays a vital role in warmly welcoming guests with the finest
                  culinary delights. It reflects the essence of hospitality
                  deeply rooted in Emirate culture
                </Text>
              </FadeInWhenVisibleY>
              <FadeInWhenVisibleY>
                <Button
                  as={NextLink}
                  href="/about"
                  fontSize="18px"
                  fontWeight={'400'}
                  fontFamily={'Poppins'}
                  lineHeight={'50px'}
                  color="#fff"
                  w={{ base: '100%', md: '271px' }}
                  h="68px"
                  borderRadius={'34px'}
                  border="1px"
                  _hover={{
                    bg: 'transparent',
                  }}
                  _active={{
                    bg: 'transparent',
                  }}
                  bg="#5A6A46"
                >
                  More
                </Button>
              </FadeInWhenVisibleY>
            </Stack>
          </Stack>
          <Box
            w={{ base: '100%', lg: '50%' }}
            h="100%"
            pos={{ base: 'relative', xl: 'relative' }}
            top={{ base: '5rem', lg: '0' }}
            bgImg="/home/header_two.png"
            bgPos={'center'}
            bgRepeat={'no-repeat'}
            bgSize={'cover'}
          />
        </Container>
      </Box>
    </>
  )
}

export default Header
