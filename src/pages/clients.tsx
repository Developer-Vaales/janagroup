import Layout from '@/Components/Layout'
import ClientsPage from '@/Components/Modules/ClientsPage'
import Seo from '@/Components/shared/Seo'

const Clients = () => {
  return (
    <Layout>
      <Seo title="Clients" url="clients" />
      <ClientsPage />
    </Layout>
  )
}

export default Clients
