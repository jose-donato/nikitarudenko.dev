import Head from 'next/head'

import Project from '@pages/Project'
import { TProject } from '@typings/contentTypes'
import { getContentData, getPageSlugs } from '@utils/markdownParser'

type Props = {
  project: TProject & { content: string }
}

const ProjectPage = (props: Props) => {
  const { project } = props

  return (
    <>
      <Head>
        <title>{project.title} | Nikita Rudenko</title>
      </Head>
      <Project project={project} />
    </>
  )
}

export async function getStaticProps({ params }: any) {
  const {
    content,
    id,
    data: { title, technologies, cover },
  } = await getContentData('projects', params.slug)

  return {
    props: {
      project: {
        id,
        title,
        technologies,
        content,
        cover,
      },
    },
  }
}

export async function getStaticPaths() {
  const paths = getPageSlugs('projects')

  return {
    paths,
    fallback: false,
  }
}

export default ProjectPage
