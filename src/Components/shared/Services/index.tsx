import FadeInWhenVisibleY from '@/Components/Layout/FadeWhenVisibleY'
import {
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'

const Services = () => {
  const data = [
    {
      id: '1',
      num: '01',
      title_one: 'Fresh Food',
      title_two: 'Manufacturing',
    },
    // { id: '2', num: '02', title_one: 'Catering', title_two: '' },
    { id: '3', num: '02', title_one: 'Hospitality', title_two: '' },
    { id: '4', num: '03', title_one: 'Bakery', title_two: 'Outlets' },
    { id: '5', num: '04', title_one: 'Foodstuff', title_two: 'Trading' },
    { id: '6', num: '05', title_one: 'Food', title_two: 'Logistics' },
  ]
  return (
    <>
      <Box w="100%" h={{ base: '100%', md: '500px' }} bg="#E5E1E6" py="2rem">
        <Container w="100%" h="100%" maxW={'1500px'}>
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
                SERVICES
              </Heading>
            </FadeInWhenVisibleY>

            <Box w="100%" my="2rem">
              <SimpleGrid
                w="100%"
                h="100%"
                pos="relative"
                spacing={'1rem'}
                columns={{ base: 1, sm: 2, md: 3, xl: 5 }}
              >
                <Box
                  w="85%"
                  h="100%"
                  pos="absolute"
                  bg="#D9D9D9"
                  left={{ base: '1.4rem', sm: '3rem', md: '4rem', lg: '7rem' }}
                />
                {data.map((item) => (
                  <FadeInWhenVisibleY key={item.id}>
                    <Flex alignItems="center" gap="1rem" pos="relative">
                      <Text
                        fontSize={'60px'}
                        fontWeight={'400'}
                        lineHeight={'72px'}
                        letterSpacing={'-1.2px'}
                        color="#575756"
                        textTransform={'capitalize'}
                        fontFamily={'Inter'}
                      >
                        {item.num}
                      </Text>
                      <Box>
                        <Text
                          fontSize={'22px'}
                          fontWeight={'300'}
                          lineHeight={'25px'}
                          letterSpacing={'-0.44px'}
                          color="#575756"
                          textTransform={'capitalize'}
                          fontFamily={'Inter'}
                        >
                          {item.title_one}
                        </Text>
                        <Text
                          fontSize={'22px'}
                          fontWeight={'300'}
                          lineHeight={'25px'}
                          letterSpacing={'-0.44px'}
                          color="#575756"
                          textTransform={'capitalize'}
                          fontFamily={'Inter'}
                        >
                          {item?.title_two}
                        </Text>
                      </Box>
                    </Flex>
                  </FadeInWhenVisibleY>
                ))}
              </SimpleGrid>
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  )
}

export default Services
