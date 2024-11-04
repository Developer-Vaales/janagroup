import FadeInWhenVisibleY from '@/Components/Layout/FadeWhenVisibleY'
import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  Heading,
  Img,
  Input,
  Link,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import FormStyle from './FormStyle'

const Footer = () => {
  const now = new Date()
  const year = now.getFullYear()
  const link = [
    { id: '1', title: 'home', link: '/' },
    { id: '2', title: 'about', link: '/about' },
    { id: '3', title: 'services', link: '/services' },
    { id: '4', title: 'clients', link: '/clients' },
    { id: '5', title: 'contact', link: '/contact' },
  ]
  return (
    <>
      <Box w="100%" h={{ base: '100%', md: '896px' }} bg="#5A6B45">
        <Container
          w="100%"
          h={{ base: '100%', md: '840px' }}
          maxW="1500px"
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Stack w="1200px" h={{ base: '95%', md: '600px' }} py="2rem">
            {/* logo */}
            <NextLink href="/" title="Home Jana">
              <Img
                src="/logo-nav.svg"
                alt="Jana Logo"
                title="Jana Logo"
                // w="239px"
                h="42px"
                my="3rem"
                loading="lazy"
              />
            </NextLink>

            <Flex
              w="100%"
              h="100%"
              gap="5rem"
              flexDirection={{ base: 'column', md: 'row' }}
              alignItems={{ base: '', md: 'center' }}
              justifyContent={'space-between'}
            >
              <Stack>
                <FadeInWhenVisibleY>
                  <Heading
                    textTransform={'capitalize'}
                    fontSize={'35px'}
                    fontWeight={'400'}
                    lineHeight={'40px'}
                    fontFamily={'Inter'}
                    mb="2rem"
                  >
                    Links
                  </Heading>
                </FadeInWhenVisibleY>

                <Stack h={{ base: '', md: '300px' }}>
                  {link.map((item) => (
                    <FadeInWhenVisibleY key={item.id}>
                      <NextLink
                        href={item.link}
                        title={item.title}
                        style={{
                          textTransform: 'capitalize',
                          fontFamily: 'Poppins',
                          fontSize: '18px',
                          fontWeight: '400',
                          lineHeight: '39px',
                          color: '#E5E1E6',
                        }}
                      >
                        {item.title}
                      </NextLink>
                    </FadeInWhenVisibleY>
                  ))}
                </Stack>
              </Stack>
              <Flex alignItems={'center'} gap="4rem">
                <Center height="210px" display={{ base: 'none', md: 'flex' }}>
                  <Divider orientation="vertical" mr="2rem" />
                </Center>
                <Stack>
                  <FadeInWhenVisibleY>
                    <Heading
                      textTransform={'capitalize'}
                      fontSize={'35px'}
                      fontWeight={'400'}
                      lineHeight={'40px'}
                      fontFamily={'Inter'}
                      mb="1rem"
                    >
                      Contact Us
                    </Heading>
                  </FadeInWhenVisibleY>

                  <Stack w={{ base: '100%', lg: '745px' }}>
                    <FormStyle />
                  </Stack>
                </Stack>
              </Flex>
            </Flex>
          </Stack>
        </Container>
        <Flex
          bg="#C9D5BB"
          alignItems={'center'}
          justifyContent={'center'}
          w="100%"
          h="56px"
        >
          <Text
            fontSize={{ base: '12px', sm: '15px' }}
            fontWeight={'400'}
            lineHeight={'33px'}
            fontFamily={'Inter'}
            color="#5A6B45"
          >
            Jana.com © {year}. All Rights Reserved.
          </Text>
        </Flex>
      </Box>
    </>
  )
}

export default Footer
