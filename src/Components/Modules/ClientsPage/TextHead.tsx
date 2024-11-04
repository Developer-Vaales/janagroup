import { Box, Container, Text } from '@chakra-ui/react'

const TextHead = () => {
  return (
    <>
      <Box w="100%" h={{ base: '100%', md: '500px' }} py="3rem" bg="#E5E1E6">
        <Container
          w="100%"
          h="100%"
          maxW="1400px"
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Text
            fontSize={{ base: '18px', md: '22px' }}
            lineHeight={{ base: '22px', md: '30px' }}
            fontWeight={'500'}
            fontFamily={'Poppins'}
            color="#5A6B45"
            // textTransform={'capitalize'}
          >
            For the past decades, we have proudly served a diverse range of
            clients across the UAE. Our long-standing partnerships are a
            testament to the high level of satisfaction and trust our clients
            place in our services. From individual consumers to large
            corporations, our commitment to excellence has consistently met and
            exceeded their expectations. We believe in building lasting
            relationships through exceptional service, quality products, and a
            dedication to meeting the unique needs of each client. Whether in
            fresh food manufacturing, hospitality, bakery outlets, foodstuff
            trading, or logistics, our clients know they can rely on us for
            outstanding results and unparalleled support.
          </Text>
        </Container>
      </Box>
    </>
  )
}

export default TextHead
