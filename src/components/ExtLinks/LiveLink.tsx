import { ExternalLinkIcon } from '@components/SVG'

import ExtLink from './ExtLink'

type Props = {
  href: string
}

const LiveLink = ({ href }: Props) => {
  return (
    <ExtLink
      className="bg-blue-700"
      href={href}
      icon={<ExternalLinkIcon />}
      label="Live"
    />
  )
}

export default LiveLink
