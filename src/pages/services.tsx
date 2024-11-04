import Layout from '@/Components/Layout'
import Preloader from '@/Components/shared/Preloader'
import Seo from '@/Components/shared/Seo'

import dynamic from 'next/dynamic'
const ServicesPage = dynamic(
  () => import('@/Components/Modules/ServicesPage'),
  {
    ssr: false,
    // loading: () => <Preloader />,
  }
)
const Services = () => {
  return (
    <Layout>
      <Seo title="Our Services" url="services" />
      <ServicesPage />
    </Layout>
  )
}

export default Services
