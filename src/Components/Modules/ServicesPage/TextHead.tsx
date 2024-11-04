import FadeInWhenVisibleY from '@/Components/Layout/FadeWhenVisibleY'
import { Box, Container, Text } from '@chakra-ui/react'

const TextHead = () => {
  return (
    <FadeInWhenVisibleY>
      <Box w="100%" h="100%" mb="4rem" mt="9rem">
        <Container w="100%" h="100%" maxW="1400px">
          <FadeInWhenVisibleY>
            <Text
              fontSize={{ base: '18px', md: '22px' }}
              lineHeight={{ base: '22px', md: '30px' }}
              fontWeight={'500'}
              fontFamily={'Poppins'}
              color="#5A6B45"
              // textTransform={'capitalize'}
            >
              Our services span multiple sectors within the food industry in the
              United Arab Emirates, ensuring a comprehensive and top-quality
              offering to our clients.
            </Text>
          </FadeInWhenVisibleY>
        </Container>
      </Box>
    </FadeInWhenVisibleY>
  )
}

export default TextHead
