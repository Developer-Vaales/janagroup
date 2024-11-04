import FadeWhenVisibleX from '@/Components/Layout/FadeWhenVisibleX'
import FadeInWhenVisibleY from '@/Components/Layout/FadeWhenVisibleY'
import { Box, Container, Text } from '@chakra-ui/react'

const DescriptionText = ({
  title,
  text_one,
  text_two,
  text_three,
  text_four,
}: any) => {
  return (
    <>
      <Box w="100%" h="100%" mb="4rem" mt="9rem">
        <Container w="100%" h="100%" maxW="1300px">
          <FadeWhenVisibleX>
            <Text
              fontSize={'40px'}
              fontWeight={'400'}
              fontFamily={'Poppins'}
              color="#5A6B45"
              my="2rem"
              textTransform={'capitalize'}
              lineHeight={'50px'}
            >
              {title}
            </Text>
          </FadeWhenVisibleX>

          <FadeInWhenVisibleY>
            <Text
              fontSize={{ base: '18px', md: '22px' }}
              lineHeight={{ base: '22px', md: '30px' }}
              fontWeight={'500'}
              fontFamily={'Poppins'}
              color="#5A6B45"
              // textTransform={'capitalize'}
            >
              {text_one}
            </Text>
          </FadeInWhenVisibleY>
          <FadeInWhenVisibleY>
            <Text
              fontSize={{ base: '18px', md: '22px' }}
              lineHeight={{ base: '22px', md: '30px' }}
              fontWeight={'500'}
              fontFamily={'Poppins'}
              color="#5A6B45"
              // textTransform={'capitalize'}
              my="2rem"
            >
              {text_two}
            </Text>
          </FadeInWhenVisibleY>
          <FadeInWhenVisibleY>
            <Text
              fontSize={{ base: '18px', md: '22px' }}
              lineHeight={{ base: '22px', md: '30px' }}
              fontWeight={'500'}
              fontFamily={'Poppins'}
              color="#5A6B45"
            >
              {text_three}
            </Text>
          </FadeInWhenVisibleY>
          <FadeInWhenVisibleY>
            <Text
              fontSize={{ base: '18px', md: '22px' }}
              lineHeight={{ base: '22px', md: '30px' }}
              fontWeight={'500'}
              fontFamily={'Poppins'}
              color="#5A6B45"
              my="2rem"
            >
              {text_four}
            </Text>
          </FadeInWhenVisibleY>
        </Container>
      </Box>
    </>
  )
}

export default DescriptionText
