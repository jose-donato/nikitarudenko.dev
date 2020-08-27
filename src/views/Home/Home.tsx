import Layout from '@components/Layout'
import SocialBlock from '@components/SocialBlock'
import {
  TBlogPostPreview,
  TPRojectPreview,
  TSnippetPreview,
} from '@typings/contentTypes'

import BlogCard from './BlogCard'
import HeroSection from './HeroSection'
import HomeNavigation from './HomeNavigation'
import LabsCard from './LabsCard'
import MainSection from './MainSection'
import NotepadCard from './NotepadCard'

type Props = {
  blogPosts: TBlogPostPreview[]
  projects: TPRojectPreview[]
  snippets: TSnippetPreview[]
}

const Home = ({ blogPosts, projects, snippets }: Props): JSX.Element => (
  <Layout>
    <Layout.Body>
      <HeroSection />
      <MainSection>
        <HomeNavigation />
        <BlogCard blogPosts={blogPosts} />
        <LabsCard projects={projects} />
        <NotepadCard snippets={snippets} />
        <SocialBlock />
      </MainSection>
    </Layout.Body>
    <Layout.Footer />
  </Layout>
)

export default Home
