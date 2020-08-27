import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const MainSection = ({ children }: Props): JSX.Element => (
  <section className="min-h-screen px-4 py-8 md:py-16 bg-monochrome-400 gradient-light">
    <div className="grid max-w-screen-md grid-cols-1 gap-3 mx-auto md:gap-5 sm:grid-cols-2">
      {children}
    </div>
  </section>
)

export default MainSection
