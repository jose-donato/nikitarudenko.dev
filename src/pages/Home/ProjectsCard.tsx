import Link from 'next/link'

import Card from '@components/Card'
import { TPRojectPreview } from '@typings/contentTypes'

type Props = {
  projects: TPRojectPreview[]
}

const ProjectsCard = ({ projects }: Props) => {
  return (
    <Card href="/projects" title="Projects">
      <ul className="mt-4">
        {projects.map(({ title, excerpt, id }) => {
          return (
            <li key={id}>
              <Link href={`/projects/${id}`}>
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

export default ProjectsCard
