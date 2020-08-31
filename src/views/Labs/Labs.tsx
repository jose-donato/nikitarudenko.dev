import Link from 'next/link'

import Card from '@components/Card'
import Layout from '@components/Layout'
import Tag from '@components/Tag'
import Title from '@components/Title'
import { TProject } from '@typings/contentTypes'

type Props = {
  projects: TProject[]
}

const Labs = ({ projects }: Props): JSX.Element => (
  <Layout>
    <Layout.Header />
    <Layout.Body className="px-4 gradient-light">
      <div className="px-2 py-24 text-center lg:px-6 text-monochrome-800">
        <Title>Labs</Title>
      </div>

      <section className="pb-8 md:pb-16">
        <div className="max-w-screen-md mx-auto">
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {projects.map(({ href, title, id, excerpt, tags }) => {
              return (
                <Card
                  className="block transition duration-200 transform rounded-md shadow-md cursor-pointer font-body hover:bg-gray-200"
                  key={id}
                >
                  <li>
                    <Link href={href}>
                      <a className="">
                        <div className="flex flex-col p-5">
                          <div className="text-base font-bold md:text-lg text-monochrome-900">
                            {title}
                          </div>
                          <div className="mt-1 text-sm font-bold md:mt-2 md:text-base text-monochrome-400">
                            {excerpt}
                          </div>
                          <div className="mt-4 ml-auto">
                            {tags.map((t) => (
                              <Tag key={t} label={t} />
                            ))}
                          </div>
                        </div>
                      </a>
                    </Link>
                  </li>
                </Card>
              )
            })}
          </ul>
        </div>
      </section>
    </Layout.Body>
    <Layout.Footer />
  </Layout>
)

export default Labs
