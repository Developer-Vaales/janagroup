import FadeInWhenVisibleY from '@/Components/Layout/FadeWhenVisibleY'
import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react'

const LetsWork = ({ title, text, bg_img }: any) => {
  return (
    <>
      <Box
        w="100%"
        h="534px"
        bgImg="/header_home.png"
        bgSize={'cover'}
        pos="relative"
      >
        <Box
          w="100%"
          h="100%"
          pos="absolute"
          left="0"
          top="0"
          bg="#000"
          backdropFilter={'blur(0px)'}
          opacity={'0.6915'}
        />
        <Container w="100%" h="100%" maxW={'931.89px'} pos="relative">
          <Stack align="center" justify={'center'} w="100%" h="100%">
            <FadeInWhenVisibleY>
              <Heading
                fontSize={'35px'}
                fontWeight={'400'}
                textAlign={'center'}
                lineHeight={{ base: '40px', md: '50px' }}
                textTransform={'capitalize'}
                fontFamily={'Inter'}
              >
                {title}
              </Heading>
            </FadeInWhenVisibleY>
            <FadeInWhenVisibleY>
              <Text
                textAlign={'center'}
                fontSize={{ base: '18px', md: '22px' }}
                fontWeight={'400'}
                lineHeight={{ base: '23px', md: '30px' }}
                fontFamily={'Inter'}
              >
                {text}
              </Text>
            </FadeInWhenVisibleY>
          </Stack>
        </Container>
      </Box>
    </>
  )
}

export default LetsWork
