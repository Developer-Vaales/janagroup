import Header from '@/Components/shared/Header'
import { Box, Container } from '@chakra-ui/react'
import DescriptionText from './DescriptionText'
import Mission from './Mission'
import LetsWork from '@/Components/shared/LetsWork'
import FadeInWhenVisibleY from '@/Components/Layout/FadeWhenVisibleY'

const AboutPage = () => {
  return (
    <>
      <Header title="about" bg_img="/about/header.webp" />
      <FadeInWhenVisibleY>
        <DescriptionText
          title="THE STORY"
          text_one="The name “Jana” transcends its literal meaning of “fruits,” symbolizing effortless abundance and delightful nature. In the rich tapestry of UAE traditions plays a vital role in warmly welcoming guests with the finest culinary delights. This reflects the essence of hospitality deeply rooted in Emirati culture, where sharing exceptional food is a gesture of respect and honor towards visitors."
          text_two="Just as “Jana” embodies growth and success, hospitality in the UAE symbolizes the flourishing tradition of extending gracious hospitality through delectable dishes, creating memorable experiences for all who partake. Jana is more than a name; it is a testament to the abundant and welcoming spirit that defines our heritage."
          text_three="Part of a diverse family group with a legacy spanning over seven decades and more than 40 years of expertise in the food industry, Jana is built on the values of family traditions, people, and quality. Our commitment to these principles ensures that every dish we create is not just a meal but a cherished memory. Join us on a culinary journey where tradition meets innovation, and every bite tells a story of passion and excellence."
          text_four=""
        />
      </FadeInWhenVisibleY>
      <FadeInWhenVisibleY>
        <Box w="100%" h="400px" my="4rem">
          <Container
            bgImg="/about/img.webp"
            bgSize="cover"
            w="100%"
            h="100%"
            bgPos="center"
            bgAttachment={'fixed'}
            maxW="1300px"
          />
        </Box>
      </FadeInWhenVisibleY>
      <FadeInWhenVisibleY>
        <DescriptionText
          title="The Difference We Make" 
          text_one="At Jana, we blend our passion for food with creativity to curate unique dining experiences that leave a lasting impression. Our attention to detail, use of fresh ingredients, and dedication to culinary innovation set us apart."
          text_two="What makes Jana truly special is our unwavering commitment to excellence in every aspect of our service. We source the finest ingredients, many from our own farm in the UAE, ensuring every dish is fresh, flavorful, and of the highest quality. Our culinary team, inspired by both tradition and innovation, crafts menus that celebrate diverse flavors and cater to a wide range of tastes."
          text_three="Beyond the plate, our exceptional service and genuine hospitality create an inviting atmosphere where guests feel welcomed and valued. Whether it’s a casual gathering or a grand event, we strive to make every occasion memorable through our meticulous attention to detail and personalized approach."
          text_four="Jana is not just about food; it’s about creating moments that resonate with warmth and satisfaction. Join us and experience the perfect blend of tradition, innovation, and heartfelt hospitality."
        />
      </FadeInWhenVisibleY>
      <FadeInWhenVisibleY>
        <Mission />
      </FadeInWhenVisibleY>
      <FadeInWhenVisibleY>
        <LetsWork
          title="LET’S WORK TOGETHER"
          text="We provide a dedicated, high-end service supplying exclusively designed contemporary uniforms worldwide to hotels, hospitality, retail, business, beauty & leisure spas, airlines, events and luxury brands."
          bg_img=""
        />
      </FadeInWhenVisibleY>

      {/*  */}
    </>
  )
}

export default AboutPage
