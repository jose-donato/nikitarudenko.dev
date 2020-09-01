import { ExternalLinkIcon } from '@components/SVG'

import ExtLink from './ExtLink'

type Props = {
  href: string
}

const OtherLink = ({ href }: Props) => {
  return (
    <ExtLink
      className="bg-blue-700"
      href={href}
      icon={<ExternalLinkIcon />}
      label="Live"
    />
  )
}

export default OtherLink
