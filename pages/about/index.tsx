import Head from 'next/head'

import About from '@pages/About'
import { TAboutPageData } from '@typings/contentTypes'
import { getContentData } from '@utils/markdownParser'

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
