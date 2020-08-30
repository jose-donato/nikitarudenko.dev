import Head from 'next/head'

import { TAboutPageData } from '@typings/contentTypes'
import { getContentData } from '@utils/markdownParser'
import About from '@views/About'

type Props = {
  data: TAboutPageData
}

const AboutPage = ({ data }: Props) => {
  return (
    <>
      <Head>
        <title>Nikita Rudenko</title>
      </Head>
      <About data={data} />
    </>
  )
}

export async function getStaticProps() {
  const { data } = getContentData('pages', 'about')

  return {
    props: {
      data,
    },
  }
}

export default AboutPage
