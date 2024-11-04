import Layout from '@/Components/Layout'
import HomePage from '@/Components/Modules/HomePage'
import Seo from '@/Components/shared/Seo'

export default function Home() {
  return (
    <Layout>
      <Seo title="Home" url="" />
      <HomePage />
    </Layout>
  )
}
