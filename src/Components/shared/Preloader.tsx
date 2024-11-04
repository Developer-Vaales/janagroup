import { Box, Img, Stack } from '@chakra-ui/react'

export default function Preloader() {
  return (
    <>
      <>
        <Box
          bg="#000"
          w="100%"
          h="100%"
          minH={'100vh'}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          border="0"
          p="0"
          m="0"
        >
          <Box
            w="100%"
            h="100%"
            pos="absolute"
            left="0"
            top="0"
            background="linear-gradient(0deg, rgba(90, 107, 69, 0.80) 5.96% rgba(176, 209, 135, 0.00) 59.65%)"
            opacity={'0.6'}
          />
          <Stack align="center" gap="1rem">
            <Img
              src="/logo-nav.svg"
              alt="Jana Logo"
              title="Jana Logo"
              w="100px"
            />
          </Stack>
        </Box>
      </>
    </>
  )
}
