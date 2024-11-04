import FadeInWhenVisibleY from '@/Components/Layout/FadeWhenVisibleY'
import { Box, Container, SimpleGrid, Stack, Text } from '@chakra-ui/react'

const Mission = () => {
  const data = [
    {
      id: '1',
      title: 'MISSION',
      text: 'Our mission at Jana is to create unforgettable experiences and exceed expectations with what we serve.',
    },
    {
      id: '2',
      title: 'VISION',
      text: 'To be the leading food producer that brings people together through exceptional food and impeccable service, setting the standard for culinary excellence.',
    },
    {
      id: '3',
      title: 'VALUES',
      text: 'Quality Creativity Integrity Customer Satisfaction',
    },
  ]
  return (
    <>
      <Box w="100%" h="100%" mb="12rem" mt="9rem">
        <Container w="100%" h="100%" maxW="1300px">
          <SimpleGrid
            spacing={{ base: '1rem', md: '7rem' }}
            w="100%"
            columns={{ base: 1, md: 2, lg: 3 }}
          >
            {data.map((item) => (
              <Stack key={item.id}>
                <FadeInWhenVisibleY>
                  <Text
                    fontSize={'40px'}
                    fontWeight={'400'}
                    fontFamily={'Poppins'}
                    color="#5A6B45"
                    my={{ base: '.5rem', md: '1rem' }}
                    textTransform={'capitalize'}
                    lineHeight={'50px'}
                  >
                    {item.title}
                  </Text>
                </FadeInWhenVisibleY>
                <FadeInWhenVisibleY>
                  <Text
                    fontSize={{ base: '18px', md: '22px' }}
                    lineHeight={{ base: '22px', md: '30px' }}
                    fontWeight={'500'}
                    fontFamily={'Poppins'}
                    color="#5A6B45"
                    my={{ base: '.5rem', md: '1rem' }}
                    // textTransform={'capitalize'}
                  >
                    {item.text}
                  </Text>
                </FadeInWhenVisibleY>
              </Stack>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </>
  )
}

export default Mission
