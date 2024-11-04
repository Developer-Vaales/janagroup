import FadeInWhenVisibleY from '@/Components/Layout/FadeWhenVisibleY'
import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react'

const WelcomeJanaCatering = () => {
  return (
    <>
      <Box
        w="100%"
        h="600px"
        bgImg="/home/header.webp"
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
          bg="#5A6B45"
          backdropFilter={'blur(0px)'}
          opacity={'0.583'}
        />
        <Container w="100%" h="100%" maxW={'931.89px'} pos="relative">
          <Stack align="center" justify={'center'} w="100%" h="100%">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="68"
              height="79"
              viewBox="0 0 68 79"
              fill="none"
              // id="flower"
            >
              <path
                d="M36.5924 9.95546C49.5714 8.71346 53.2904 6.18846 53.2904 6.18846C53.2904 6.18846 49.6694 11.3815 35.7884 11.3455C35.7884 11.3455 35.7744 7.76546 33.1344 4.96246C29.3914 0.986463 22.5324 -0.323537 12.0354 1.07246C8.62736 1.52546 -0.422644 2.72846 0.0153561 8.89846C0.266356 12.4235 3.82536 15.0125 10.8984 16.8145C15.7374 18.0485 21.8034 18.7875 28.2804 18.9485V53.9175C28.2804 63.5975 20.4334 71.4445 10.7534 71.4445V78.8725C24.5364 78.8725 35.7094 67.6995 35.7094 53.9175V18.9215C63.8424 18.9175 67.7204 1.87146 67.7204 1.87146C43.2494 -4.89454 37.1234 8.67946 36.5924 9.95546ZM10.7534 8.93246C11.4054 8.80746 12.1594 8.68346 13.0314 8.56746C23.6644 7.15446 26.7884 9.30646 27.4914 10.0005C28.0814 10.5815 28.1044 11.1635 28.0884 11.3815C20.2214 11.1595 14.2964 10.0495 10.7534 8.93246Z"
                fill="#D3E1C4"
              />
            </svg>

            <FadeInWhenVisibleY>
              <Heading
                fontSize={'35px'}
                fontWeight={'400'}
                textAlign={'center'}
                lineHeight={{ base: '40px', md: '50px' }}
                color="#F5F5F5"
                my="2rem"
                textTransform={"uppercase"}
                fontFamily={'Inter'}
              >
                Welcome to Jana!
              </Heading>
            </FadeInWhenVisibleY>

            <FadeInWhenVisibleY>
              <Text
                textAlign={'center'}
                fontSize={{ base: '18px', md: '22px' }}
                fontWeight={'400'}
                lineHeight={{ base: '23px', md: '30px' }}
                color="#FFF"
                fontFamily={'Inter'}
              >
                Jana is not just about food; it’s about creating moments that
                resonate with warmth and satisfaction. Join us and experience
                the perfect blend of tradition, innovation, and heartfelt
                hospitality.
              </Text>
            </FadeInWhenVisibleY>
          </Stack>
        </Container>
      </Box>
    </>
  )
}

export default WelcomeJanaCatering
