import Header from '@/Components/shared/Header'
import TextHead from './TextHead'
import { Box, Container, Img, SimpleGrid } from '@chakra-ui/react'
import FadeInWhenVisibleY from '@/Components/Layout/FadeWhenVisibleY'
import React from 'react'

const ClientsPage = () => {
  const data = [
    { id: '1', img: '/clients/elIte-school.png' },
    { id: '2', img: '/clients/akg.png' },
    { id: '3', img: '/clients/moi.png' },
    { id: '4', img: '/clients/emirates-steel.png' },
    { id: '5', img: '/clients/enoc.png' },
    { id: '6', img: '/clients/alain-uinversity.png' },
    { id: '7', img: '/clients/almanhal-school.png' },
    { id: '8', img: '/clients/allthihad-school.png' },
    { id: '9', img: '/clients/aldar.png' },
    { id: '10', img: '/clients/albashiar-school.png' },
    { id: '11', img: '/clients/afcoop.png' },
    { id: '12', img: '/clients/adnoc.png' },
    { id: '13', img: '/clients/geant-express.png' },
    { id: '14', img: '/clients/coop.png' },
    { id: '15', img: '/clients/best-cup.png' },
    { id: '16', img: '/clients/abu-dhabi-cycling-club.png' },
    { id: '17', img: '/clients/abu-dhabi-chamber.png' },
    { id: '18', img: '/clients/rabdan-academy.png' },
    { id: '19', img: '/clients/three-star-fashion.png' },
    // { id: '20', img: '/clients/brunch-bites.png' },
    { id: '20', img: '/clients/icp-01.jpg' },
    { id: '21', img: '/clients/abudhabiuniversity.jpg' },
    { id: '22', img: '/clients/abu-dhabi-chamber-logo-vector.jpg' },
    { id: '23', img: '/clients/aldar.jpg' },
    { id: '24', img: '/clients/ded-logo.jpg' },
    { id: '25', img: '/clients/duukin.jpg' },
    { id: '26', img: '/clients/emaratlogo.jpg' },
    { id: '27', img: '/clients/enoclogo.jpg' },
    { id: '28', img: '/clients/nestle-logo.jpg' },
    { id: '29', img: '/clients/qatarairways.jpg' },
    { id: '30', img: '/clients/anok.jpeg' },
    { id: '31', img: '/clients/judicial.jpg' },
    { id: '32', img: '/clients/seha.jpg' },
    // { id: '33', img: '/clients/icp-01.jpg' },

  ]
  return (
    <>
      <Header title="Clients" bg_img="/clients/header.webp" />
      <FadeInWhenVisibleY>
        <TextHead />
      </FadeInWhenVisibleY>
      <Box
        display={{ base: 'none', lg: 'flex' }}
        w="100%"
        h={{ base: '', lg: '1042px' }}
        bg="#fff"
        py="3rem"
      >
        <Container
          w="100%"
          h="100%"
          maxW="1400px"
          display={'flex'}
          alignItems={'center'}
          flexDirection={'column'}
          justifyContent={'center'}
        >
          <SimpleGrid
            w="100%"
            my="1rem"
            spacing={'2rem'}
            alignItems={'center'}
            columns={{ base: 2, md: 3, lg: 5 }}
          >
            {data.slice(0, 5).map((item) => (
              <FadeInWhenVisibleY key={item.id}>
                <Img
                  src={item.img}
                  alt="Jana Image"
                  title="Jana Image"
                  loading="lazy"
                  objectFit={'cover'}
                />
              </FadeInWhenVisibleY>
            ))}
          </SimpleGrid>
          <SimpleGrid
            w="100%"
            my="1rem"
            spacing={'2rem'}
            alignItems={'center'}
            columns={{ base: 2, md: 3, lg: 8 }}
          >
            {data.slice(5, 13).map((item) => (
              <FadeInWhenVisibleY key={item.id}>
                <Img
                  src={item.img}
                  alt="Jana Image"
                  title="Jana Image"
                  loading="lazy"
                  objectFit={'cover'}
                />
              </FadeInWhenVisibleY>
            ))}
          </SimpleGrid>
          <SimpleGrid
            w="100%"
            my="1rem"
            spacing={'2rem'}
            alignItems={'center'}
            columns={{ base: 2, md: 3, lg: 7 }}
          >
            {data.slice(13, 20).map((item) => (
              <FadeInWhenVisibleY key={item.id}>
                <Img
                  src={item.img}
                  alt="Jana Image"
                  title="Jana Image"
                  loading="lazy"
                  objectFit={'cover'}
                />
              </FadeInWhenVisibleY>
            ))}
          </SimpleGrid>
          <SimpleGrid
            w="100%"
            my="1rem"
            spacing={'2rem'}
            alignItems={'center'}
            columns={{ base: 2, md: 3, lg: 7 }}
          >
            {data.slice(20, 27).map((item) => (
              <FadeInWhenVisibleY key={item.id}>
                <Img
                  src={item.img}
                  alt="Jana Image"
                  title="Jana Image"
                  loading="lazy"
                  objectFit={'cover'}
                />
              </FadeInWhenVisibleY>
            ))}
          </SimpleGrid>
          <SimpleGrid
            w="100%"
            my="1rem"
            spacing={'2rem'}
            alignItems={'center'}
            columns={{ base: 2, md: 3, lg: 7 }}
          >
            {data.slice(27, 36).map((item) => (
              <FadeInWhenVisibleY key={item.id}>
                <Img
                  src={item.img}
                  alt="Jana Image"
                  title="Jana Image"
                  loading="lazy"
                  objectFit={'cover'}
                />
              </FadeInWhenVisibleY>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
      <Box
        w="100%"
        h={{ base: '', lg: '1042px' }}
        bg="#fff"
        py="3rem"
        display={{ base: 'flex', lg: 'none' }}
      >
        <Container
          w="100%"
          h="100%"
          maxW="1400px"
          display={'flex'}
          alignItems={'center'}
          flexDirection={'column'}
          justifyContent={'center'}
        >
          <SimpleGrid
            w="100%"
            my="1rem"
            spacing={'2rem'}
            alignItems={'center'}
            columns={{ base: 2, md: 3, lg: 5 }}
          >
            {data.map((item) => (
              <FadeInWhenVisibleY key={item.id}>
                <Img
                  src={item.img}
                  alt="Jana Image"
                  title="Jana Image"
                  loading="lazy"
                  objectFit={'cover'}
                />
              </FadeInWhenVisibleY>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </>
  )
}

export default ClientsPage
