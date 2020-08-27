/* eslint-disable */
import { InlineIcon, Icon } from '@iconify/react'

type Props = {
  type?: 'inline' | 'block'
  [x: string]: any
}

function IconifyEmoji({ type = 'inline', ...props }: Props) {
  if (type === 'inline') {
    /* @ts-ignore */
    return <Icon suppressHydrationWarning {...props} />
  } else {
    /* @ts-ignore */
    return <InlineIcon suppressHydrationWarning {...props} />
  }
}

export default IconifyEmoji
