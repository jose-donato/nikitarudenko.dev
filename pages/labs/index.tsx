import Head from 'next/head'

import Labs from '@pages/Labs'
import { TProject } from '@typings/contentTypes'
import { getContentDataList } from '@utils/markdownParser'

type Props = {
  projects: TProject[]
}

const LabsPage = (props: Props) => {
  const { projects } = props

  return (
    <>
      <Head>
        <title>Labs | Nikita Rudenko</title>
      </Head>
      <Labs projects={projects} />
    </>
  )
}

async function getBlogPostsPreview() {
  return await getContentDataList('projects').map(
    ({ id, data: { title, excerpt, cover, technologies, links } }) => {
      return {
        id,
        href: `/labs/${id}`,
        title,
        excerpt,
        cover,
        technologies,
        links,
      }
    }
  )
}

export async function getStaticProps() {
  return {
    props: {
      projects: await getBlogPostsPreview(),
    },
  }
}

export default LabsPage
