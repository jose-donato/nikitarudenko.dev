import Link from 'next/link'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  title?: string
  href?: string
  className?: string
}

const Card = (props: Props) => {
  const { children, title, className, href } = props

  return (
    <div
      className={`p-4 md:p-6 bg-white rounded-md shadow-sm text-mononchrome-800 ${className}`}
    >
      {title && href && (
        <h3 className="px-2 py-2 text-xl font-bold md:px-3 md:text-2xl font-body">
          <Link href={href}>
            <a className="px-1 mb-4 transition duration-300 border-b-4 border-yellow-400 border-opacity-75 hover:bg-yellow-400 hover:border-transparent hover:bg-opacity-75 focus:bg-yellow-400 focus:border-transparent focus:bg-opacity-75">
              {title}
            </a>
          </Link>
        </h3>
      )}

      {children}
    </div>
  )
}

export default Card
