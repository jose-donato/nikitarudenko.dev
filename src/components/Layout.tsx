import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
}

const Layout = ({ children }: Props) => <div>{children}</div>

Layout.Header = ({ children }: Props) => <header>{children}</header>

Layout.Body = ({ children, className }: Props) => (
  <main className={className}>{children}</main>
)

Layout.Footer = () => (
  <footer>
    <div className="flex flex-col justify-center px-4 py-4 sm:flex-row sm:items-center sm:justify-evenly md:py-8 md:px-16 font-body text-mononchrome-800">
      <div className="text-sm md:text-base">
        Made using{' '}
        <FooterLink className="hover:bg-black" href="https://nextjs.org/">
          Next.js
        </FooterLink>
        ,{' '}
        <FooterLink
          className="hover:bg-teal-500"
          href="https://tailwindcss.com/"
        >
          Tailwind
        </FooterLink>
        , and{' '}
        <FooterLink className="hover:bg-green-400" href="https://forestry.io/">
          Forestry.io
        </FooterLink>
      </div>

      <div className="text-sm sm:ml-auto">
        <span className="font-bold">MIT License © 2020</span>
      </div>
    </div>
  </footer>
)

const FooterLink = ({
  children,
  className,
  href,
}: {
  children: ReactNode
  href: string
  className?: string
}) => {
  return (
    <a className={`font-bold hover:text-white ${className}`} href={href}>
      {children}
    </a>
  )
}

export default Layout
