import { GithubLink, OtherLink } from '@components/ExtLinks'
import Layout from '@components/Layout'
import MarkdownContent from '@components/MarkdownContent'
import Tag from '@components/Tag'
import Title from '@components/Title'
import { TProject } from '@typings/contentTypes'

type Props = {
  project: TProject & { content: string }
}

const Project = ({
  project: { content, title, tags, links, gradient },
}: Props): JSX.Element => {
  return (
    <Layout>
      <Layout.Header />
      <Layout.Body>
        <div
          style={{ background: gradient }}
          className="flex flex-col px-8 py-16 md:py-24 text-monochrome-700 font-display gradient-light"
        >
          <div className="max-w-screen-lg m-auto text-3xl font-bold text-center md:text-4xl">
            <Title>{title}</Title>
          </div>
        </div>

        <section className="p-4 bg-white">
          <article className="max-w-screen-md mx-auto text-base md:pt-4 font-body text-monochrome-700">
            <MarkdownContent content={content} />
          </article>

          <div className="flex flex-col items-center justify-between max-w-screen-md gap-2 px-4 py-2 mx-auto mt-16 mb-4 border-t-2 border-opacity-25 sm:flex-row">
            <div className="order-last p-1 sm:order-first">
              {tags.map((t) => (
                <Tag key={t} label={t} />
              ))}
            </div>
            <div className="grid justify-center grid-flow-col gap-2 p-1">
              {links.map(({ href, label }) => {
                return label === 'GitHub' ? (
                  <GithubLink key={label} href={href} />
                ) : (
                  <OtherLink key={label} href={href} label={label} />
                )
              })}
            </div>
          </div>
        </section>
      </Layout.Body>
      <Layout.Footer />
    </Layout>
  )
}

export default Project
