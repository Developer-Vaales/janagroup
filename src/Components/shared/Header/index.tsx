import FadeInWhenVisibleY from '@/Components/Layout/FadeWhenVisibleY'
import { Box, Container, Heading } from '@chakra-ui/react'
import React from 'react'

const Header = ({ title, bg_img }: any) => {
  return (
    <>
      <Box
        w="100%"
        h="500px"
        bg="#122100"
        bgImg={bg_img}
        bgSize={'cover'}
        bgPos="center"
        pos="relative"
      >
        <Box
          w="100%"
          h="100%"
          pos="absolute"
          left="0"
          top="0"
          bg="#000"
          opacity={'0.6'}
        />
        <Container
          w="100%"
          h="100%"
          maxW="1500px"
          display={'flex'}
          alignItems="center"
          justifyContent={'center'}
          pos="relative"
        >
          <FadeInWhenVisibleY>
            <Heading
              fontSize={'60px'}
              fontWeight={'400'}
              lineHeight="normal"
              fontFamily={'Poppins'}
              color="#fff"
              textTransform={'capitalize'}
            >
              {title}
            </Heading>
          </FadeInWhenVisibleY>
        </Container>
      </Box>
    </>
  )
}

export default Header
