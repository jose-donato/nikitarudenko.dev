import Link from 'next/link'

import Card from '@components/Card'
import { TPRojectPreview } from '@typings/contentTypes'

type Props = {
  projects: TPRojectPreview[]
}

const LabsCard = ({ projects }: Props) => {
  return (
    <Card className="p-4 md:p-6" href="/labs" title="Labs">
      <ul className="mt-4">
        {projects.map(({ title, excerpt, href, id }) => {
          return (
            <li key={id}>
              <Link href={href}>
                <a className="block p-3 transition-colors duration-200 rounded-md font-body focus:bg-mononchrome-100 hover:bg-mononchrome-100">
                  <div className="flex items-center">
                    {/* <div className="mr-2">{emoji}</div> */}
                    <div className="text-base font-bold md:text-lg text-mononchrome-900">
                      {title}
                    </div>
                  </div>
                  <div className="text-sm font-bold md:text-base text-mononchrome-400">
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
