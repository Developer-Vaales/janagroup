import Layout from '@/Components/Layout'
import AboutPage from '@/Components/Modules/AboutPage'
import Seo from '@/Components/shared/Seo'

const About = () => {
  return (
    <Layout>
      <Seo title="About Us" url="about" />
      <AboutPage />
    </Layout>
  )
}

export default About
