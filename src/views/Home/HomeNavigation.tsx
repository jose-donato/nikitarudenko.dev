import Link from 'next/link'

import Card from '@components/Card'
import { INTERNAL_LINKS } from '@constants/links'

function HomeNavigation() {
  return (
    <div className="grid content-center justify-center grid-cols-4 col-span-1 gap-2 md:gap-5 sm:col-span-2">
      {INTERNAL_LINKS.slice(1, Infinity).map(({ label, href, emoji }) => (
        <Card
          key={label}
          className="text-sm font-bold md:text-xl font-body hover-bg-grayout"
        >
          <Link href={href}>
            <a className="flex flex-col items-center justify-center p-2 sm:flex-row sm:p-4">
              <span className="flex items-center justify-center sm:mr-2">
                {emoji}
              </span>
              <span>{label}</span>
            </a>
          </Link>
        </Card>
      ))}
    </div>
  )
}

export default HomeNavigation
