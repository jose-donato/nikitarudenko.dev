import Layout from '@components/Layout'

import HeroSection from './HeroSection'
import MainSection from './MainSection'

const Home = (): JSX.Element => (
  <Layout>
    <Layout.Body>
      <HeroSection />
      <MainSection />
    </Layout.Body>
    <Layout.Footer />
  </Layout>
)

export default Home
