import Link from 'next/link'

import Card from '@components/Card'
import Layout from '@components/Layout'
import { TBlogPostPreview } from '@typings/contentTypes'

type Props = {
  blogPosts: TBlogPostPreview[]
}

const Blog = ({ blogPosts }: Props): JSX.Element => (
  <Layout>
    <Layout.Header />
    <Layout.Body className="px-4 gradient-light">
      <div className="flex items-center justify-center px-2 py-24 lg:px-6 text-mononchrome-800 font-display">
        <h1 className="px-4 text-5xl font-bold bg-yellow-400 shadow-md font-display">
          Blog
        </h1>
      </div>

      <section className="min-h-screen pb-8 md:pb-16">
        <div className="max-w-screen-md mx-auto">
          <ul>
            {blogPosts.map(({ href, title, date, id, excerpt }) => {
              return (
                <Card className="mb-4 shadow-md" key={id}>
                  <li>
                    <Link href={href}>
                      <a className="block p-5 transition-colors duration-200 rounded-md cursor-pointer font-body focus:bg-mononchrome-100 hover:bg-mononchrome-100">
                        <div className="flex items-baseline">
                          <div className="text-base font-bold md:text-lg text-mononchrome-900">
                            {title}
                          </div>
                          <div className="hidden ml-auto text-sm font-bold md:block font-body text-mononchrome-400">
                            {new Date(date).toLocaleDateString('en-US')}
                          </div>
                        </div>
                        <div className="mt-1 text-sm font-bold md:mt-2 md:text-base text-mononchrome-400">
                          {excerpt}
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

export default Blog
