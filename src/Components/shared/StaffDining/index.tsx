import FadeInWhenVisibleY from '@/Components/Layout/FadeWhenVisibleY'
import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react'

const StaffDining = () => {
  return (
    <>
      <Box
        w="100%"
        h="600px"
        bgImg="/home/stuff.webp"
        bgSize={'cover'}
        bgAttachment={'fixed'}
        pos="relative"
      >
        <Box
          w="100%"
          h="100%"
          pos="absolute"
          left="0"
          top="0"
          bg="#D3E1C4"
          backdropFilter={'blur(0px)'}
          opacity={'0.853'}
        />
        <Container w="100%" h="100%" maxW={'931.89px'} pos="relative">
          <Stack align="center" justify={'center'} w="100%" h="100%">
            <FadeInWhenVisibleY>
              <Heading
                fontSize={'35px'}
                fontWeight={'400'}
                lineHeight={'50px'}
                color="#5A6B45"
                textTransform={'uppercase'}
                fontFamily={'Inter'}
              >
                Out Team
              </Heading>
            </FadeInWhenVisibleY>

            <FadeInWhenVisibleY>
              <Text
                textAlign={'center'}
                fontSize={{ base: '18px', md: '22px' }}
                fontWeight={'400'}
                lineHeight={{ base: '23px', md: '30px' }}
                color="#5A6B45"
                fontFamily={'Inter'}
              >
                With over 800 employees representing 48 nationalities, our
                diverse team brings expertise and cultural influences to every
                dish we create.
              </Text>
            </FadeInWhenVisibleY>
          </Stack>
        </Container>
      </Box>
    </>
  )
}

export default StaffDining
