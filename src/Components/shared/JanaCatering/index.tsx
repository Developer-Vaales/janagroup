import FadeInWhenVisibleY from '@/Components/Layout/FadeWhenVisibleY'
import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react'

const JanaCatering = () => {
  return (
    <>
      <Box w="100%" h="500px" bg="#E5E1E6">
        <Container w="100%" h="100%" maxW={'1000px'}>
          <Stack align="center" justify={'center'} w="100%" h="100%">
            <FadeInWhenVisibleY>
              <Heading
                fontSize={'35px'}
                fontWeight={'400'}
                lineHeight={'50px'}
                color="#5A6B45"
                textTransform={'capitalize'}
                fontFamily={'Inter'}
              >
                JANA
              </Heading>
            </FadeInWhenVisibleY>
            <FadeInWhenVisibleY>
              <Text
                textAlign={'center'}
                fontSize={{ base: '18px', md: '22px' }}
                fontWeight={'400'}
                lineHeight={{ base: '23px', md: '30px' }}
                color="#5A6B45"
                fontFamily={'Poppins'}
              >
                we blend passion for food with creativity to curate unique
                dining experiences that leave a lasting impression. Our
                attention to detail, use of fresh ingredients, and dedication to
                culinary innovation set us apart.
              </Text>
            </FadeInWhenVisibleY>
          </Stack>
        </Container>
      </Box>
    </>
  )
}

export default JanaCatering
