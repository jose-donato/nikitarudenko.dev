import Head from 'next/head'

import { TProject } from '@typings/contentTypes'
import { getContentDataList } from '@utils/markdownParser'
import Labs from '@views/Labs'

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
    ({ id, data: { title, excerpt, tags, links, emoji } }) => {
      return {
        id,
        href: `/labs/${id}`,
        title,
        excerpt,
        tags,
        links,
        emoji,
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
