import Head from 'next/head'

import { TProject } from '@typings/contentTypes'
import { getContentData, getPageSlugs } from '@utils/markdownParser'
import Project from '@views/Project'

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
    data: { title, tags, emoji, gradient, links },
  } = await getContentData('projects', params.slug)

  return {
    props: {
      project: {
        id,
        title,
        tags,
        content,
        emoji,
        gradient,
        links,
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
