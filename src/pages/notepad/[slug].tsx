import Head from 'next/head'

import { TSnippet } from '@typings/contentTypes'
import { getContentData, getPageSlugs } from '@utils/markdownParser'
import Snippet from '@views/Snippet'

type Props = {
  snippet: TSnippet & { content: string }
}

const NotepadItemPage = (props: Props) => {
  const { snippet } = props

  return (
    <>
      <Head>
        <title>{snippet.title} | Nikita Rudenko</title>
      </Head>
      <Snippet snippet={snippet} />
    </>
  )
}

export async function getStaticProps({ params }: any) {
  const {
    content,
    id,
    data: { title, tags },
  } = await getContentData('snippets', params.slug)

  return {
    props: {
      snippet: {
        id,
        title,
        tags,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const paths = getPageSlugs('snippets')

  return {
    paths,
    fallback: false,
  }
}

export default NotepadItemPage
