import clsx from 'clsx'
import Link from 'next/link'
import React, { useState } from 'react'

import links from '@constants/links'

import MobileNavIcon from './MobileNavIcon'

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav
        className={clsx(
          'fixed inset-0 h-full',
          isOpen && 'opacity-100',
          !isOpen && 'pointer-events-none'
        )}
      >
        <div
          className={clsx(
            'flex justify-center items-center inset-0 opacity-0 bg-white h-full transition-opacity duration-500',
            isOpen && 'opacity-100'
          )}
          style={{
            backgroundImage:
              'linear-gradient(-225deg, rgba(172, 50, 228, 0.7) 0%, rgba(121, 24, 242, 0.7) 48%, rgba(72, 1, 255, 0.7) 100%)',
          }}
        >
          <ul className="flex flex-col items-center font-body">
            {links.map(({ href, label }) => {
              return (
                <li
                  key={label}
                  className="inline-block p-2 mb-4 text-2xl font-bold bg-yellow-400 rounded-md text-mononchrome-700"
                >
                  <Link href={href}>
                    <a>{label}</a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>

      <div
        style={{
          backgroundImage:
            'linear-gradient(-225deg, rgba(172, 50, 228, 0.7) 0%, rgba(121, 24, 242, 0.7) 48%, rgba(72, 1, 255, 0.7) 100%)',
        }}
        className={clsx(
          'fixed bottom-0 right-0 p-4 bg-gray-700 rounded-tl-lg',
          isOpen && 'bg-gray-900'
        )}
      >
        <MobileNavIcon isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </>
  )
}

export default MobileNav
