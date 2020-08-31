import clsx from 'clsx'

import { TRenderProps } from '@typings/commonPropTypes'

const Body = ({ children, className, ...props }: TRenderProps) => (
  <main
    style={{
      minHeight: `calc(100vh - 5rem)`,
    }}
    className={clsx('h-full', className)}
    {...props}
  >
    {children}
  </main>
)

export default Body
