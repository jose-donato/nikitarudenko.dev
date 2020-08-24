import Markdown from 'markdown-to-jsx'

import Card from '@components/Card'
import Layout from '@components/Layout'
import options from '@components/MarkdownContent'
import Tag from '@components/Tag'
import { TAboutPageData } from '@typings/contentTypes'

type Props = {
  data: TAboutPageData
}

const About = ({ data }: Props): JSX.Element => {
  const { avatar, bio, learning, stack } = data

  return (
    <Layout>
      <Layout.Header />
      <Layout.Body>
        <section className="min-h-screen px-4 py-8 md:py-16 bg-monochrome-400 gradient-light">
          <div className="grid max-w-screen-md grid-cols-1 gap-5 mx-auto sm:grid-cols-2">
            <Card className="p-4 sm:col-span-2 md:p-6" title="Bio">
              <div className="grid p-3 mt-4 md:grid-cols-3">
                <div className="col-span-2 font-body">
                  <Markdown options={options}>{bio}</Markdown>
                </div>
                <div className="hidden w-32 h-32 m-auto md:block">
                  <img
                    className="overflow-hidden rounded-md"
                    src={avatar}
                    alt="Avatar."
                  />
                </div>
              </div>
            </Card>
            <Card className="p-4 md:p-6" title="Core stack">
              <div className="flex flex-row flex-wrap p-3 mt-4">
                {stack.map((technology) => (
                  <Tag key={technology} label={technology} />
                ))}
              </div>
            </Card>
            <Card className="p-4 md:p-6" title="Learning">
              <div className="p-3 mt-4 font-body">
                <Markdown options={options}>{learning}</Markdown>
              </div>
            </Card>
          </div>
        </section>
      </Layout.Body>
      <Layout.Footer />
    </Layout>
  )
}

export default About
