import {
  Box,
  Container,
  Flex,
  Img,
  Link,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
  Stack,
} from '@chakra-ui/react'
import { CiMenuFries } from 'react-icons/ci'
import NextLink from 'next/link'

const Navbar = () => {
  // Chakra UI's useDisclosure hook for handling the drawer's open/close state
  const { isOpen, onOpen, onClose } = useDisclosure()

  // Navigation links
  const links = [
    { id: '1', title: 'home', link: '/' },
    { id: '2', title: 'about', link: '/about' },
    { id: '3', title: 'services', link: '/services' },
    { id: '4', title: 'clients', link: '/clients' },
    { id: '5', title: 'contact', link: '/contact' },
  ]

  return (
    <>
      <Box
        w="100%"
        h="80px"
        pos="fixed"
        top="0"
        left="0"
        zIndex="9"
        borderBottom="1px rgba(201, 213, 187, 0.10)"
        backdropFilter="blur(25px)"
        bg="rgba(16, 29, 0, 0.20)"
      >
        <Container w="100%" h="100%" maxW="1500px">
          <Flex
            w="100%"
            h="100%"
            alignItems="center"
            justifyContent="space-between"
            gap="1rem"
          >
            {/* Logo with a link to the homepage */}
            <NextLink href="/" title="Home Jana">
              <Img
                src="/logo-nav.svg"
                alt="Jana Logo"
                title="Jana Logo"
                w="92.728px"
                h="34.305px"
                loading="lazy"
              />
            </NextLink>

            {/* Navigation links displayed on medium to large screens */}
            <Flex
              alignItems="center"
              gap="1rem"
              display={{ base: 'none', md: 'flex' }}
            >
              {links.map((item) => (
                <NextLink
                  key={item.id}
                  href={item.link}
                  title={item.title}
                  style={{
                    textTransform: 'capitalize',
                    fontFamily: 'Inter',
                    fontSize: '22px',
                    fontWeight: '400',
                    lineHeight: '39px',
                  }}
                >
                  {item.title}
                </NextLink>
              ))}
            </Flex>

            {/* Menu icon for opening the drawer on smaller screens */}
            <Flex
              cursor="pointer"
              onClick={onOpen}
              alignItems="center"
              gap="1rem"
              display={{ base: 'flex', md: 'none' }}
            >
              <CiMenuFries size="2rem" />
            </Flex>
          </Flex>
        </Container>

        {/* Drawer component for mobile navigation */}
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent backdropFilter="blur(25px)" bg="rgba(16, 29, 0, 0.20)">
            <DrawerCloseButton
              color="#fff"
              size="1rem"
              m="1rem"
              _hover={{
                bg: 'transparent',
              }}
              _focusVisible={{
                bg: 'transparent',
              }}
              _active={{
                bg: 'transparent',
              }}
            />

            <DrawerBody
              mt="5rem"
              zIndex="999"
              alignItems="center"
              flexDirection="column"
              display="flex"
            >
              <Text
                color="#fff"
                my="1rem"
                fontSize="24px"
                fontStyle="normal"
                fontWeight="600"
                lineHeight="24px"
                letterSpacing="2.4px"
                textTransform="uppercase"
              >
                explore
              </Text>

              {/* Stack of links inside the drawer */}
              <Stack align="center">
                {links.map((item) => (
                  <NextLink
                    key={item.id}
                    href={item.link}
                    title={item.title}
                    style={{
                      textTransform: 'capitalize',
                      fontFamily: 'Inter',
                      fontSize: '22px',
                      fontWeight: '400',
                      lineHeight: '39px',
                    }}
                  >
                    {item.title}
                  </NextLink>
                ))}
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  )
}

export default Navbar
