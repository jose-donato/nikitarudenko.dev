import Hero from '@components/Hero'
import Layout from '@components/Layout'
import Paper from '@components/Paper'

const Home = (): JSX.Element => (
  <Layout>
    <Layout.Header>.</Layout.Header>
    <Layout.Body>
      <Hero />
      <Paper>Hello paper</Paper>
    </Layout.Body>
  </Layout>
)

export default Home
