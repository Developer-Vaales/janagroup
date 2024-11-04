import { Box } from '@chakra-ui/react'

const Map = ({ title }: any) => {
  return (
    <>
      <Box w="100%" h="500px" pos="relative" mb="0rem">
        <iframe
          width="640"
          height="480"
          // src="https://www.google.com/maps/d/embed?mid=1JBic0LYEihCw9-7NNCqV8tQFMmueuZ0&ehbc=2E312F&noprof=1"
          src="https://www.google.com/maps/d/u/0/embed?mid=1f6FZp6hEn9zetJ_Dxaw0yWmATIsBT9k&ehbc=2E312F&noprof=1"
          // src="https://www.google.com/maps/d/embed?mid=1JBic0LYEihCw9-7NNCqV8tQFMmueuZ0&ehbc=2E312F&noprof=1"
          title=""
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            border: '0',
          }}
        />

        {/* <iframe
          width="640"
          height="480"
        ></iframe> */}
      </Box>
    </>
  )
}

export default Map
