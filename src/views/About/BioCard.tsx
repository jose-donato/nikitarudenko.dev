import Markdown from 'markdown-to-jsx'

import Card from '@components/Card'
import options from '@components/MarkdownContent'
import { TAboutPageData } from '@typings/contentTypes'

type Props = Pick<TAboutPageData, 'avatar' | 'bio'>

function BioCard({ bio, avatar }: Props) {
  return (
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
  )
}

export default BioCard
