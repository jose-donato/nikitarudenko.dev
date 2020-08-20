import clsx from 'clsx'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import React, { useState } from 'react'

import links from '@constants/links'

import MobileNavIcon from './MobileNavIcon'

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { pathname } = useRouter()

  return (
    <>
      <nav
        className={clsx(
          'fixed inset-0 h-full z-40',
          isOpen && 'opacity-100',
          !isOpen && 'pointer-events-none'
        )}
      >
        <div
          className={clsx(
            'flex justify-center items-center inset-0 opacity-0 bg-white h-full transition-opacity duration-500',
            isOpen && 'opacity-100'
          )}
        >
          <ul className="flex flex-col items-center font-body">
            {links.map(({ href, label }) => {
              if (href === pathname) {
                return
              } else {
                return (
                  <li
                    key={label}
                    className="inline-block p-2 mb-4 text-2xl font-bold bg-yellow-400 shadow-md text-monochrome-700"
                  >
                    <Link href={href}>
                      <a>{label}</a>
                    </Link>
                  </li>
                )
              }
            })}
          </ul>
        </div>
      </nav>

      <div className="fixed bottom-0 right-0 z-40 p-4 rounded-tl-lg shadow-md bg-monochrome-700">
        <MobileNavIcon isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </>
  )
}

export default MobileNav
