import Layout from '@components/Layout'
import SocialBlock from '@components/SocialBlock'
import { TAboutPageData } from '@typings/contentTypes'

import BioCard from './BioCard'
import LearningCard from './LearningCard'
import StackCard from './StackCard'

type Props = {
  data: TAboutPageData
}

const About = ({ data }: Props): JSX.Element => {
  const { avatar, bio, learning, stack } = data

  return (
    <Layout>
      <Layout.Header />
      <Layout.Body className="px-4 py-8 md:py-16 bg-monochrome-400 gradient-light">
        <div className="grid max-w-screen-md grid-cols-1 gap-5 mx-auto sm:grid-cols-2">
          <BioCard avatar={avatar} bio={bio} />
          <StackCard stack={stack} />
          <LearningCard learning={learning} />
          <SocialBlock />
        </div>
      </Layout.Body>
      <Layout.Footer />
    </Layout>
  )
}

export default About
