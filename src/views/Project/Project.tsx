import { GithubLink, LiveLink } from '@components/ExtLinks'
import Layout from '@components/Layout'
import MarkdownContent from '@components/MarkdownContent'
import Tag from '@components/Tag'
import Title from '@components/Title'
import { TProject } from '@typings/contentTypes'

type Props = {
  project: TProject & { content: string }
}

const Project = ({
  project: { content, title, technologies },
}: Props): JSX.Element => {
  return (
    <Layout>
      <Layout.Header />
      <Layout.Body>
        <div className="flex flex-col px-8 pt-16 md:pt-24 text-monochrome-700 font-display gradient-light">
          <div className="max-w-screen-lg m-auto text-3xl font-bold text-center md:text-4xl">
            <Title>{title}</Title>
          </div>
          <div className="grid grid-flow-row gap-2 px-8 py-2 mx-auto mt-16 bg-white rounded-t-md">
            <div className="text-center">
              {technologies.map((t) => (
                <Tag key={t} label={t} />
              ))}
            </div>
            <div className="grid justify-center grid-flow-col gap-2">
              <GithubLink href="//github.com" />
              <LiveLink href="//google.com" />
            </div>
          </div>
        </div>

        <section className="p-4 bg-white">
          <article className="max-w-screen-md pt-2 mx-auto text-base md:pt-12 font-body text-monochrome-700">
            <MarkdownContent content={content} />
          </article>
        </section>
      </Layout.Body>
      <Layout.Footer />
    </Layout>
  )
}

export default Project
