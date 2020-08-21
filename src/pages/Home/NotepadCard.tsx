import Link from 'next/link'

import Card from '@components/Card'
import { TSnippetPreview } from '@typings/contentTypes'

type Props = {
  snippets: TSnippetPreview[]
}

const NotepadCard = ({ snippets }: Props) => {
  return (
    <Card className="p-4 md:p-6" href="/notepad" title="Notepad">
      <ul className="mt-4">
        {snippets.map(({ id, title, excerpt, href }) => {
          return (
            <li key={id}>
              <Link href={href}>
                <a className="block p-3 transition-colors duration-200 rounded-md font-body focus:bg-monochrome-100 hover:bg-monochrome-100">
                  <div className="flex items-center">
                    <div className="text-base font-bold md:text-lg text-monochrome-900">
                      {title}
                    </div>
                  </div>
                  <div className="text-sm font-bold md:text-base text-monochrome-400">
                    {excerpt}
                  </div>
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </Card>
  )
}

export default NotepadCard
