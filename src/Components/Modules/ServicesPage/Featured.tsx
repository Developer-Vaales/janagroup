import FadeInWhenVisibleY from '@/Components/Layout/FadeWhenVisibleY'
import { Box, Container, Flex, Img, Stack, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

const Featured = ({ data }: any) => {
  const [offsetY, setOffsetY] = useState(0)

  const handleScroll = () => {
    setOffsetY(window.pageYOffset)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <>
      <Box w="100%" h="100%" mb="4rem" mt="9rem">
        <Container w="100%" h="100%" maxW="1400px">
          {data.map((item: any) => (
            <Flex
              key={item.id}
              my="2rem"
              w="100%"
              alignItems={'center'}
              justifyContent={'space-between'}
              flexDirection={{ base: 'column', md: item.row }}
              gap="1rem"
            >
              <Box
                cursor={'pointer'}
                overflow={'hidden'}
                w={{ base: '100%', md: '45%' }}
                h="461px"
                pos="relative"
              >
                <>
                  <Img
                    className="zoom-out"
                    src={item.img}
                    title={item.title}
                    alt={item.title}
                    w="100%"
                    h="100%"
                    loading="lazy"
                    objectFit={'cover'}
                    // style={{
                    //   transform: `translateY(${offsetY * -.1}px)`,
                    // }}
                  />
                </>
              </Box>

              <Stack
                w={{ base: '100%', md: '45%' }}
                my={{ base: '2rem', md: '0' }}
              >
                <FadeInWhenVisibleY>
                  <Text
                    fontSize={{ base: '25px', md: '35px' }}
                    lineHeight={{ base: '30px', md: '58px' }}
                    fontWeight={'500'}
                    fontFamily={'Poppins'}
                    color="#5A6B45"
                    textTransform={'capitalize'}
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
                    // textTransform={'capitalize'}
                  >
                    {item.text}
                  </Text>
                </FadeInWhenVisibleY>
              </Stack>
            </Flex>
          ))}
        </Container>
      </Box>
    </>
  )
}

export default Featured
