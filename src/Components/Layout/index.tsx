import { CacheProvider } from '@chakra-ui/next-js'
import { Box, ChakraProvider } from '@chakra-ui/react'
import theme from './theme'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'
import ScrollToTop from './ScrollToTop'

// Define the type for the children prop
interface ProvidersProps {
  children: React.ReactNode
}

const Layout = ({ children }: ProvidersProps) => {
  return (
    // CacheProvider ensures that Chakra UI styles are correctly applied
    <CacheProvider>
      {/* ChakraProvider provides Chakra UI theming and context */}
      <ChakraProvider theme={theme}>
        {/* Main container box with full height and width, and relative positioning */}
        <Box h="100%" w="100%" overflow="hidden" pos="relative" zIndex="9">
          {/* Navbar component at the top */}
          <Navbar />

          {/* Main content passed as children */}
          {children}

          {/* Footer component at the bottom */}
          <Footer />

          {/* ScrollToTop component to handle scrolling to the top of the page */}
          <ScrollToTop />
        </Box>
      </ChakraProvider>
    </CacheProvider>
  )
}

export default Layout
