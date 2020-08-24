import Layout from '@components/Layout'
import MarkdownContent from '@components/MarkdownContent'
import Title from '@components/Title'

const BlogPost = ({ blogPost: { content, title } }: any): JSX.Element => {
  return (
    <Layout>
      <Layout.Header />
      <Layout.Body>
        <div className="px-8 py-16 md:py-24 text-monochrome-700 font-display gradient-light">
          <div className="max-w-screen-lg m-auto text-center">
            <Title>{title}</Title>
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

export default BlogPost
