import Layout from '@/Components/Layout'
import ContactPage from '@/Components/Modules/ContactPage'
import Seo from '@/Components/shared/Seo'

const Contact = () => {
  return (
    <Layout>
      <Seo title="Contact Us" url="contact" />
      <ContactPage />
    </Layout>
  )
}

export default Contact
