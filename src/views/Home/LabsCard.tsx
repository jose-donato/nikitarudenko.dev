import Link from 'next/link'

import Card from '@components/Card'
import EmojiSVG from '@components/EmojiSVG'
import { TPRojectPreview } from '@typings/contentTypes'

type Props = {
  projects: TPRojectPreview[]
}

const LabsCard = ({ projects }: Props) => {
  return (
    <Card className="p-4 md:p-6" href="/labs" title="Labs">
      <ul className="mt-4">
        {projects.map(({ title, excerpt, href, id, emoji }) => {
          return (
            <li key={id}>
              <Link href={href}>
                <a className="block p-3 transition-colors duration-200 rounded-md font-body hover-bg-grayout">
                  <div className="flex items-baseline">
                    <div className="mr-2 text-2xl">
                      <EmojiSVG src={emoji} />
                    </div>
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

export default LabsCard
