import Header from '@/Components/shared/Header'
import {
  Box,
  Center,
  Container,
  Divider,
  Flex,
  Stack,
  Text,
} from '@chakra-ui/react'
import TextHead from './TextHead'
import Featured from './Featured'
import LetsWork from '@/Components/shared/LetsWork'
import FadeInWhenVisibleY from '@/Components/Layout/FadeWhenVisibleY'

const ServicesPage = () => {
  const data = [
    {
      id: '1',
      title: 'Fresh Food Manufacturing',
      text: 'We produce a wide range of fresh food products, ensuring that every item meets our stringent quality standards. Our facilities and rigorous quality control processes guarantee that our customers receive only the best.',
      img: '/services/fresh.png',
      row: 'row',
    },
    {
      id: '2',
      title: 'Catering',
      text: 'From intimate gatherings to large-scale events, our catering services are designed to provide exceptional culinary experiences. We offer tailored menus and impeccable service to meet the unique needs of each occasion, creating memorable experiences for all guests.',
      img: '/services/fresh.png',
      row: 'row-reverse',
    },
    {
      id: '3',
      title: 'Hospitality',
      text: 'Our hospitality services are rooted in the rich traditions of Emirati culture, where sharing exceptional food is a gesture of respect and honor. We offer a warm and welcoming environment, ensuring that every guest feels valued and cherished.',
      img: '/services/hospitality.png',
      row: 'row',
    },
    {
      id: '4',
      title: 'Bakery Outlets',
      text: 'Our bakery outlets offer a variety of freshly baked goods, crafted with the finest ingredients and traditional techniques. From artisanal breads to delectable pastries, our bakeries provide a delightful experience for all who visit.',
      img: '/services/outlets.png',
      row: 'row-reverse',
    },
    {
      id: '5',
      title: 'Foodstuff Trading',
      text: 'We engage in the trading of high-quality foodstuffs, sourcing the best products from around the world. Our extensive network and expertise in procurement ensure that our clients receive premium goods that meet their specific needs.',
      img: '/services/food-stuff.png',
      row: 'row',
    },
    {
      id: '6',
      title: 'Food Logistics',
      text: 'Our dedicated logistics arm connects the entire UAE daily, serving hundreds of sales points with efficiency and reliability. We pride ourselves on our ability to deliver fresh and high-quality products promptly, maintaining the integrity and quality of our goods from farm to table.',
      img: '/services/food-logistics.png',
      row: 'row-reverse',
    },
  ]
  return (
    <>
      <Header title="Our SERVICES " bg_img="/header_home.png" />
      <FadeInWhenVisibleY>
        <TextHead />
      </FadeInWhenVisibleY>
      <>
        <Featured data={data} />
      </>
      <FadeInWhenVisibleY>
        <LetsWork
          title="Committed to the highest quality"
          text="we proudly use our own farm in the UAE to grow seasonal vegetables as part of a high-quality procurement system. This ensures that we provide the freshest and most nutritious products to our customers, supporting our dedication to excellence in every aspect of our services."
          bg_img=""
        />
      </FadeInWhenVisibleY>
      <FadeInWhenVisibleY>
        <Box
          pos="relative"
          w="100%"
          h="838px"
          bgImg="/home/stuff.webp"
          bg=""
          bgSize={'cover'}
        >
          <Box
            w="100%"
            h="100%"
            pos="absolute"
            left="0"
            top="0"
            bg="#242424"
            backdropFilter={'blur(0px)'}
            opacity={'0.853'}
          />
          <Container
            w="100%"
            h="100%"
            maxW="1200px"
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            pos="relative"
          >
            <Flex
              w="100%"
              h={{ base: '', sm: '', md: '', lg: '470px' }}
              gap="2rem"
              flexDirection={{ base: 'column', lg: 'row' }}
              alignItems={'start'}
              justifyContent={'center'}
            >
              <Stack align={'center'}>
                {/* <Img
                src="/jana-icon.svg"
                alt="Logo Jana"
                title="Logo Jana"
                w="35px"
                h="41px"
                loading="lazy"
              /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="68"
                  height="79"
                  viewBox="0 0 68 79"
                  fill="none"
                  id="flower"
                >
                  <path
                    d="M36.5924 9.95546C49.5714 8.71346 53.2904 6.18846 53.2904 6.18846C53.2904 6.18846 49.6694 11.3815 35.7884 11.3455C35.7884 11.3455 35.7744 7.76546 33.1344 4.96246C29.3914 0.986463 22.5324 -0.323537 12.0354 1.07246C8.62736 1.52546 -0.422644 2.72846 0.0153561 8.89846C0.266356 12.4235 3.82536 15.0125 10.8984 16.8145C15.7374 18.0485 21.8034 18.7875 28.2804 18.9485V53.9175C28.2804 63.5975 20.4334 71.4445 10.7534 71.4445V78.8725C24.5364 78.8725 35.7094 67.6995 35.7094 53.9175V18.9215C63.8424 18.9175 67.7204 1.87146 67.7204 1.87146C43.2494 -4.89454 37.1234 8.67946 36.5924 9.95546ZM10.7534 8.93246C11.4054 8.80746 12.1594 8.68346 13.0314 8.56746C23.6644 7.15446 26.7884 9.30646 27.4914 10.0005C28.0814 10.5815 28.1044 11.1635 28.0884 11.3815C20.2214 11.1595 14.2964 10.0495 10.7534 8.93246Z"
                    fill="#D3E1C4"
                  />
                </svg>
                <Text
                  fontSize={{ base: '25px', md: '35px' }}
                  lineHeight={{ base: '35px', md: '50px' }}
                  fontWeight={'500'}
                  fontFamily={'Inter'}
                  color="#D3E1C4"
                  textTransform={'capitalize'}
                >
                  PASSION
                </Text>
              </Stack>
              <Center
                height={{ base: '650px', lg: '470px' }}
                display={{ base: 'none', lg: 'flex' }}
              >
                <Divider orientation="vertical" mr="2rem" />
              </Center>
              <Flex alignItems={'center'} gap="4rem">
                <Stack>
                  <FadeInWhenVisibleY>
                    <Text
                      fontSize={{ base: '18px', lg: '22px' }}
                      lineHeight={{ base: '22px', lg: '30px' }}
                      fontWeight={'500'}
                      fontFamily={'Poppins'}
                      color="#D3E1C4"
                      // textTransform={'capitalize'}
                    >
                      At Jana, our passion transcends mere culinary expertise;
                      it’s about crafting unforgettable experiences through
                      food. We believe that food has the power to create lasting
                      memories and bring people together.
                    </Text>
                  </FadeInWhenVisibleY>
                  <FadeInWhenVisibleY>
                    <Text
                      fontSize={{ base: '18px', lg: '22px' }}
                      lineHeight={{ base: '22px', lg: '30px' }}
                      fontWeight={'500'}
                      fontFamily={'Poppins'}
                      color="#D3E1C4"
                      // textTransform={'capitalize'}
                    >
                      Every dish we prepare is a labor of love, where we
                      meticulously select the finest ingredients and blend them
                      with creativity and expertise. Our culinary team pours
                      their heart and soul into each recipe, striving not just
                      for culinary excellence but to evoke joy and satisfaction
                      with every bite.
                    </Text>
                  </FadeInWhenVisibleY>
                  <FadeInWhenVisibleY>
                    <Text
                      fontSize={{ base: '18px', lg: '22px' }}
                      lineHeight={{ base: '22px', lg: '30px' }}
                      fontWeight={'500'}
                      fontFamily={'Poppins'}
                      color="#D3E1C4"
                      // textTransform={'capitalize'}
                    >
                      Jana is more than a service; it’s a culinary journey that
                      celebrates the artistry of food. From the rich flavors and
                      textures to the presentation of each dish, we aim to
                      delight the senses and create memorable dining experiences
                      for our customers.
                    </Text>
                  </FadeInWhenVisibleY>
                  <FadeInWhenVisibleY>
                    <Text
                      fontSize={{ base: '18px', lg: '22px' }}
                      lineHeight={{ base: '22px', lg: '30px' }}
                      fontWeight={'500'}
                      fontFamily={'Poppins'}
                      color="#D3E1C4"
                      // textTransform={'capitalize'}
                    >
                      Whether we’re catering a special event, serving guests in
                      our hospitality venues, or offering freshly baked goods in
                      our bakery outlets, our commitment to excellence and
                      passion for food shines through in everything we do. At
                      Jana, we invite you to join us on this journey of culinary
                      exploration and enjoyment.
                    </Text>
                  </FadeInWhenVisibleY>
                </Stack>
              </Flex>
            </Flex>
          </Container>
        </Box>
      </FadeInWhenVisibleY>
    </>
  )
}

export default ServicesPage
