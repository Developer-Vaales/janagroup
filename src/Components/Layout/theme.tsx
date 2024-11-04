import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#FFFFFF',
        color: '#FFFFFF',
      },
    },
  },
  config: {
    initialColorMode: 'light', // 'dark' | 'light'
    useSystemColorMode: false,
  },
})

export default theme
