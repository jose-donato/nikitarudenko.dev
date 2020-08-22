import Head from 'next/head'

import { TSnippet } from '@typings/contentTypes'
import { getContentDataList } from '@utils/markdownParser'
import Notepad from '@views/Notepad'

type Props = {
  snippets: TSnippet[]
}

const NotepadPage = (props: Props) => {
  const { snippets } = props

  return (
    <>
      <Head>
        <title>Notepad | Nikita Rudenko</title>
      </Head>
      <Notepad snippets={snippets} />
    </>
  )
}

async function getBlogPostsPreview() {
  return await getContentDataList('snippets').map(
    ({ id, data: { title, excerpt, tags } }) => {
      return {
        id,
        href: `/notepad/${id}`,
        title,
        excerpt,
        tags,
      }
    }
  )
}

export async function getStaticProps() {
  return {
    props: {
      snippets: await getBlogPostsPreview(),
    },
  }
}

export default NotepadPage
